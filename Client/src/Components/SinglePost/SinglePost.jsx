import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
const [singlePostData , setSinglePostData]= useState({})

  useEffect(() => {
    const getPost = async () => {
      axios.defaults.baseURL = "http://localhost:3000/api";
      await axios
        .get("/posts/" + path)
        .then((res) => {
          console.log("SINGLE_PAGE:res__", res.data);
          setSinglePostData(res.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="post">
        <div className="postInfo">
          <img className="SinglepostImg" alt="" />

          <h1 className="singlePostTitle">
            {singlePostData.title ? (
            <>
             {singlePostData.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </>
            ):
            (<p>"It is not find"</p>)
            }
           
          </h1>

          <h1 className="postDetail">
            <span>
              Author: <b> {singlePostData.authorName ? (<b>"Not Error"</b>):(<b>"Error"</b>)} </b>
            </span>
            <span>{new Date(singlePostData.createdAt).toDateString()}</span>
          </h1>
          <p className="singlePostDesc">{singlePostData.description }</p>
        </div>
      </div>
    </div>
  );
}

// ? (<b>"Not Error"</b>):(<b>"Error"</b>)