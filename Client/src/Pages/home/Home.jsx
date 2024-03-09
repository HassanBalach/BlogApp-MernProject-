import React, { useEffect, useState } from "react"
import "./Home.css"
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import axios from 'axios';


function Home() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const postUploaded = async()=>{
       axios.defaults.baseURL = 'http://localhost:3000';
      await axios.get('/api/posts')
        .then((response)=>{
          console.log("RESPONSE:::",response.data)
          setPosts(response.data)
         
        })
        .catch((err)=>{
          console.log("Error:",err ); 
        })
       
    }
    postUploaded()
  },[])
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts posts={posts.data}/>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
