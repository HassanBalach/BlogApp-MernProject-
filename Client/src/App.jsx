import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Setting/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";




export default function App() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postid" element={<Single />} />
       
      </Routes>
    </div>
  )
}



