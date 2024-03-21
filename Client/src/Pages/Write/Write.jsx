import { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "../../ContextApi/Context.js"


export default function Write() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const {user} = useContext(Context);
 
  const handleSubmit = async (e) => {
    e.preventDefault;
    
    /*
    const newPost = {
      username: user.username,
      title,
      desc
    };
    if (file) {
      const container = new FormData();
      const filename = Date.now() + file.name; //uploading time
      container.append("name", filename); //AddingFileToContainer
      container.append("file", file);
      await axios.get("/api/post", container);
      newPost.image = filename;
      axios.defaults.baseURL = "http://localhost:3000";
      try {
        await axios.post("/api/upload", container);
      } catch (error) {}
      try {
        const res = await axios.post("/api/posts", newPost);
        window.location.replace("/post/", res.data._id);
      } catch (error) {}
    }
    */
  };

  return (
    <div>
      <div className="selectEntirePost">
        {file && (
          <img className="imageItself" src={URL.createObjectURL(file)} alt="" />
        )}

        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-circle-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story...."
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="submitBtn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
