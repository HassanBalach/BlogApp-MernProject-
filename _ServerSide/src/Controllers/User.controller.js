import { User  } from "../Models/User.model.js";
import { ApiError } from "../Utiles/ApiError.js";
import { ApiResponse } from "../Utiles/ApiResponse.js";
import { asyncHandler } from "../Utiles/Asynco.js";
import { Post } from "../Models/Post.model.js";
import bcrypt from "bcryptjs";

// Registration of user
const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((fields) => fields?.trim() == "")) {
    res.status(404).send({ message: "All fields are required" });
  }
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new ApiError(401, "Username or email already exists");
  }

  const saltRounds = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    email,
    password: hasedPassword,
  });

  await user.save();
  const userFinilizied = await User.findOne(user._id).select("-password")
  console.log("Created user in database is ", userFinilizied);

  
  if (!userFinilizied) {
    throw new ApiError(408, "user is not created in the database");
  }
  res.status(200).send(userFinilizied);
});
// Login of user
const userLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(403, "Wrong Credentials");
    }

    const userPassword = await bcrypt.compare(password, user.password);
    if (!userPassword) {
      throw new ApiError(412, "Wrong Credentials");
    }

    const LoggedInUser = await User.findOne(user._id).select("-password");
    res
      .status(210)
      .json(
        new ApiResponse(210, LoggedInUser, "user is successfully logged in")
      );
  } catch (error) {
    throw new ApiError("410", error);
  }
});

//Update user

const updateUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  const userID = req.params.id;
  console.log("userID is ", userID);
  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(":I am user:", user);

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;

    if(password){
      const salt  = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt)
      user.password = hashedPassword;
    }
    

    await user.save();
    res.status(200).json(new ApiResponse("200", user, "User updated: _SUCCESSFULLY_"));
  } catch (error) {
    throw new ApiError('406', "you can only update your own account")

  }
});

//Delete user

const deleteUser = asyncHandler(async(req, res)=>{
  const { username, email, password }= req.body;
  const userID = req.params.id;
  try {
    const user = await User.findById(userID)
    if (!user) {
      throw new ApiError("403", "User not found");
    }
    await Post.deleteMany({authorName: user.authorName})
    await User.findOneAndDelete({ _id: userID })
   
   res.status(200).json(new ApiResponse("200", "User is successfully deleted"))
  } catch (error) {
    throw new ApiError("403", "Something is wrong in deleting the user:")
  }
})


//Get
const getUser = asyncHandler(async(req,res)=>{
  const userID =  req.params.id
  try {
    const user = await User.findById(userID)
    const userDetail = await User.findOne(user).select("-password")
    
    res.status(200).json(new ApiResponse("200", userDetail ))
  } catch (error) {
    throw new ApiError("410", error )
  }
})
export { userRegister, userLogin, updateUser, deleteUser ,getUser };
