import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginSetting">
        <h1>Login</h1>
        <div className="loginInfo">
          <label>Email</label>
          <input type="email" placeholder="Enter your email..." />
          <label>Password</label>
          <input type="password" placeholder="Enter your password..." />
          <button className="loginBtn" type="submit">
            Login
          </button>
        </div>
        <button className="RegisterBtn">
          <Link className="linkStyle" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}
