import { Post } from "../Models/Post.model.js";
import { ApiError } from "../Utiles/ApiError.js";
import { ApiResponse } from "../Utiles/ApiResponse.js";
import { asyncHandler } from "../Utiles/Asynco.js";

// Create Post
const createPost = asyncHandler(async (req, res) => {
  try {
    const post = await Post.create(req.body);

    await post.save();
    res.status(200).json(new ApiResponse(200, post));
  } catch (error) {
    throw new ApiError(404, "CatchError: Post Not Created");
  }
});
//UPDATE POST

const updatePost = asyncHandler(async (req, res) => {
  const { image, title, authorName, description, categories } = req.body;
  console.log(req.body);
  const postID = req.params.id;
  console.log("postID is ", postID);
  try {
    const post = await Post.findById(postID);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.title = title || post.title;
    post.categories = categories || post.categories;
    post.image = image || post.image;
    post.description = description || post.description;
    post.authorName = authorName || post.authorName;

    await post.save();
    res
      .status(200)
      .json(new ApiResponse("200", post, "post updated: _SUCCESSFULLY_"));
  } catch (error) {
    throw new ApiError("406", "you can only update your own account");
  }
});

//DELETE POST

const deletePost = asyncHandler(async (req, res) => {
  const postID = req.params.id;
  try {
    const post = await Post.findById(postID);
    if (!post) {
      throw new ApiError("403", "post not found");
    }

    await Post.findOneAndDelete({ _id: postID });

    res
      .status(200)
      .json(new ApiResponse("200", "post is successfully deleted"));
  } catch (error) {
    throw new ApiError("403", error);
  }
});

//GET A POST

const getPost = asyncHandler(async (req, res) => {
  const postID = req.params.id;
  try {
    const post = await Post.findById(postID);
    const postDetail = await Post.findOne(post);

    res.status(200).json(new ApiResponse("200", postDetail));
  } catch (error) {
    throw new ApiError("410", error);
  }
});

//GET ALL POSTS

const getAllPosts = asyncHandler(async (req, res) => {
  /*
  If you want to learn about query then see this url
  http://example.com/posts?user=johndoe&cat=technology
  */

  try {
    const {user: username , cat: catName} = req.query;
    let posts;
    if (username) {
      posts = await Post.find({ authorName: username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    }else{
      posts = await Post.find()
    }
    res.status(200).json(new ApiResponse("200", posts, "Successfully all posts are uploaded:"))
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new ApiError(500 , "Server Error in getting all posts")
   
  }
});

export { createPost, updatePost, deletePost, getPost, getAllPosts };
