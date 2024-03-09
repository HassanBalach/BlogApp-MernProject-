import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="setting">
      <div className="settingWarppers">
        <div className="settingInfo">
          <span className="settingInfolg">Update Your Account</span>
          <span className="settingInfosm">Delete Account</span>
        </div>
        <div className="settingProfile">
          <h5>Profile Picture</h5>
          <div className="settingsPP">
            <img
              className="ProfileImage"
              src="https://th.bing.com/th/id/R.ff1ac66ddafa16f9ac99afbf3f6ce4b8?rik=Wy%2flD3pb3Zb5CA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-je7eW7LvSJw%2fUiZxCZTGcZI%2fAAAAAAAAO2A%2fR-36_E0xzo0%2fs400%2fmuslim%2bkid.jpg&ehk=QImUS1X2367bDmDKHfihU5crF8ZTjymWDkKfg7q1PDs%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <label htmlFor="uploadProfile">
            <i className="profileIcon fa-solid fa-circle-user"></i>
              {""}
            </label>
            <input
              id="uploadProfile"
              style={{ display: "none" }}
              type="text"
              className="settingProfileInput"
            />
          </div>
        </div>
          <label>UserName</label>
          <input className="inputTags" type="text" placeholder="Hassan" name="name" />
          <label>Email</label>
          <input className="inputTags" type="email" placeholder="Hassan123@gmail.com" name="email" />
          <label >Password</label>
          <input className="inputTags" type="password" placeholder="Hassan123" name="password" />
          <button className="updateBtn" type="submit">
            Update
          </button>

      </div>
      <Sidebar />
    </div>
  );
}
