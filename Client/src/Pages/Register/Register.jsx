import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMg, setErrorMg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMg(false)
    try {
      axios.defaults.baseURL = "http://localhost:3000"
      const res = await axios.post("/api/register",{
        username,password,email
      })
      console.log('User registerd successfully::');
      res && window.location.replace('/login')
    } catch (error) {
      console.log(error);
      setErrorMg(true)
    }
  };


  return (
    <div className="register">
      <div className="registerSetting">
        <h1>Register</h1>
        <form className="registerInfo" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
              placeholder="Enter your email..."
              value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
          value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerBtn1" type="submit">
            Register
          </button>
        </form>
        <button className="loginBtnInRegister">
          <Link className="linkStyle" to="/login">
            LOGIN
          </Link>
        </button>
   
        {errorMg && <span style={{color: "white" , marginTop: "20px"}}> Something went wrong</span> } 
       
      </div>
    </div>
  );
}
