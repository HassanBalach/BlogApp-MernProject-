import { Link } from "react-router-dom";
import "./Login.css";
import { useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../../ContextApi/Context";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {  dispatch, isFetching } = useContext(Context);
  axios.defaults.baseURL = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "Login_Start" });
    try {
      const res = await axios.post("/api/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "Login_Success", payload: res.data });
      // res && window.location.replace('/')

    } catch (error) {
      dispatch({ type: "Login_Failure" });
    }
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
          <button className="loginBtn" type="submit" disabled={isFetching}>
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
