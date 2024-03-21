import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const postUploaded = async () => {
      axios.defaults.baseURL = "http://localhost:3000";
      await axios
        .get("/api/posts" + search)
        .then((response) => {
          setPosts(response.data);
          console.log("RES_DATA", response.data);
          console.log("SEarcH_", search);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    postUploaded();
  }, [search]);
  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts.data} />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;

//http://localhost:5173/post?user=Hassan%20Kazy
