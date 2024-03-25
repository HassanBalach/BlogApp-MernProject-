import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Setting/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Context } from "./ContextApi/Context";

export default function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route
          path="/write"
          element={user ? <Write /> : <Register />} // Changed Register to Write
        />
        <Route
          path="/setting"
          element={user ? <Settings /> : <Register />} // Changed Register to Settings
        />
        <Route path="/post/:postid" element={<Single />} />
     
    </Routes>
    </>
  );
}
