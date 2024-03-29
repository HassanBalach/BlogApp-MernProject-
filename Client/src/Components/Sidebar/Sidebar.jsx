import { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";

function Sidebar() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      axios.defaults.baseURL = "http://localhost:3000/api";
      const res = await axios.get("/category");
  
      setCategory(res.data.data);
    };
    getCategory();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarlist">
        <div className="aboutme">
          <center>
            <span>ABOUT ME</span>
          </center>
        </div>

        <div className="img_font">
          <img
            className="sidebarImg"
            src="https://lh4.googleusercontent.com/proxy/gHeZr1PMAGo-pZqpWAhvCAQV0-DX_nwVE6xAB5rM4az34JhL-SkwfoGng9_QmeC-fXFO4Apy1Eazq_QaCGExokJlcJ1WR85syRhp5zT-"
            alt=""
          />
          <p className="sidebarDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam
            enim mollitiaates quia ratione. Quidem aliquam ratione consequuntur
            dicta quae?
          </p>
        </div>

        <div className="sideBarItems">
          <center className="category">
            <span>CATEGORIES</span>
          </center>
          <ul className="totalSidebar">
            <div className="categoryCentrization">
            {category.map((cat) => (
              <li className="itemItems" key={cat._id}>{cat.name}</li>
            ))}
            </div>
          </ul>
        </div>
        <div className="sidebarItem">
          <center className="followus">
            <span>FOLLOW US</span>
          </center>
          <div className="sidebarSocial">
            <i className=" sidebarIcon fa-brands fa-youtube"></i>
            <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
            <i className=" sidebarIcon fa-brands fa-whatsapp"></i>
            <i className=" sidebarIcon fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
