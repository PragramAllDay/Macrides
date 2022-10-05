import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarDataAdmin";
import "./SideBarAdmin.css";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { name } = useSelector((state) => state.login.value);
  const username = localStorage.getItem("username", name);
  const showSidebar = () => setSidebar(!sidebar);

  const handleChange = (event) => {};
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-panel-admin">
          <Link to="#" className="menu-bars-admin">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="mr-10">
            <div className="mr-10">
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120, color: "white" }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ color: "white", fontSize: "18px" }}
                  variant="standard"
                >
                  {username}
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-standard-label"
                  // id="demo-simple-select-standard"
                  // value={age}
                  sx={{ color: "white" }}
                  onChange={handleChange}
                  onClick={handleLogout}
                  label="username"
                >
                  <MenuItem value={10}>Logout</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu-admin active" : "nav-menu-admin"}>
          <ul className="nav-menu-items-admin" onClick={showSidebar}>
            <li className="navbar-toggle-admin">
              <Link to="#" className="menu-bars-admin">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
