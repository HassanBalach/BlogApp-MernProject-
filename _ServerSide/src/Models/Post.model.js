import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: {
    type: String, 
    required: false,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  authorName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categories:{
    type: Array,
    require: false
  }
},{timestamps: true});


export const Post = mongoose.model('Post', postSchema);


