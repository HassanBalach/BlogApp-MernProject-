import { Category } from "../Models/Category.model.js";
import { ApiError } from "../Utiles/ApiError.js";
import { ApiResponse } from "../Utiles/ApiResponse.js";
import { asyncHandler } from "../Utiles/Asynco.js";

const createCategory = asyncHandler(async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(new ApiResponse(200, savedCategory));
  } catch (error) {
    throw new ApiError(
      404,
      "Its impossible to create a category with same name "
    );
  }
});
const getCategory = asyncHandler(async (req, res) => {
  try {
    const catName = await Category.find();

    res.status(200).json(new ApiResponse(200, catName));
  } catch (error) {
    throw new ApiError(
      404,
      "Its impossible to create a category with same name "
    );
  }
});

export { createCategory, getCategory };
