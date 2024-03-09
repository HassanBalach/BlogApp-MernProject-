import { Link } from 'react-router-dom'
import './Register.css'

export default function Register() {
  return (
    <div className="register">
    <div className="registerSetting">
      <h1>Register</h1>
      <div className="registerInfo">
      <label >Username</label>
            <input type="text" placeholder="Enter your username..." />
          <label >Email</label>
          <input type="email" placeholder="Enter your email..." />
          <label >Password</label>
          <input type="password" placeholder="Enter your password..." />
          <button className="registerBtn1" type="submit">Register</button>
      </div>
      <button className="loginBtnInRegister">
      <Link className="linkStyle" to="/login">
                  LOGIN
                </Link>
      </button>
    </div>
  </div>
  )
}
