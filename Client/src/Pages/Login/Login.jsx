import { Link } from "react-router-dom";
import "./Login.css";
import { useRef } from "react";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
 const { dispatch , isFetching} = useContext()

  const handleSubmit =  (e) => {
    e.preventDefalt()
 };
  return (
    <div className="login">
      <div className="loginSetting">
        <h1>Login</h1>
        <form className="loginInfo" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            ref={userRef}
            placeholder="Enter your username..."
          />
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password..."
          />
          <button className="loginBtn" type="submit">
            Login
          </button>
        </form>
        <button className="RegisterBtn">
          <Link className="linkStyle" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}
