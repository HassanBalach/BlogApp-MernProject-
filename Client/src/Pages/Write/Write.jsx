import { useContext, useState } from "react";
import "./Write.css";
import { Context } from "../../ContextApi/Context";
import axios from 'axios';

export default function Write() {
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [image, setImage] = useState()
  const {user} = useContext(Context)
  
  
const handleSubmit = async (e)=>{
  e.preventDefault()
  axios.defaults.baseURL = "http://localhost:3000/"
  const newPost = {
    username: user.username,
    title,
    desc,
    
  }
  if(image){
    const data = new FormData();
    const fileName =  Date.now() +  image.name;
    data.append("name", fileName)
    data.append("image", image)
    newPost.image = fileName
    try {
      await axios.post("api/upload")
    } catch (err)  {
      console.log(err);
    }
  }
  try {
    
   const res = await axios.post("/post", newPost)
  
  //  window.location.replace("/post/"  + res.data._id)
    
  } catch (error) {}
}

  return (
    <div>
      
      <div className="selectEntirePost">
        {image && (

        <img
          className="imageItself"
          src={URL.createObjectURL(image)}
          alt=""
        />
        )}
    
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setImage(e.target.files[0])} />
          <input
            type="text"
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
        <textarea 
        className="writeInput writeText"
        onChange={(e)=>setDesc(e.target.value)}
        placeholder="Tell your story...."
        autoFocus={true}
        >
        </textarea>
        </div>
        <button className="submitBtn" type="submit">
          Publish
        </button>
      </form>
      </div>
    </div>
  );
}
