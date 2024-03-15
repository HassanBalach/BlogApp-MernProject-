import React, { useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../ContextApi/Context";

function Topbar() {
  const {user} = useContext(Context);
  return (
    <div>
      <div className="topbar">
        <div className="rightTopbar">
          <i className=" topIcon fa-brands fa-youtube"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
          <i className=" topIcon fa-brands fa-whatsapp"></i>
          <i className=" topIcon fa-brands fa-facebook"></i>
        </div>
        <div className="middleTopbar">
          <ul className="topItem">
            <li className="topItemList">
              <Link className="linkStyle" to="/">
                HOME
              </Link>
            </li>
            <li className="topItemList">
              <Link className="linkStyle" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topItemList">
              <Link className="linkStyle" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topItemList">
              <Link className="linkStyle" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topItemList">
              <Link className="linkStyle" to="/login">
                {user && "LOGOUT"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="leftTopbar">
          {user ? (
            <img
              className="topImage"
              src="https://th.bing.com/th/id/R.ff1ac66ddafa16f9ac99afbf3f6ce4b8?rik=Wy%2flD3pb3Zb5CA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-je7eW7LvSJw%2fUiZxCZTGcZI%2fAAAAAAAAO2A%2fR-36_E0xzo0%2fs400%2fmuslim%2bkid.jpg&ehk=QImUS1X2367bDmDKHfihU5crF8ZTjymWDkKfg7q1PDs%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          ) : (
            <ul className="topItem">
              <li className="topItemList">
                <Link className="linkStyle" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topItemList">
                <Link className="linkStyle" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
