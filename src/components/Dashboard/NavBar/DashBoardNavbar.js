import React from "react";
import { Link } from "react-router-dom";
import "./DashBoardNavBar.css";

const DashBoardNavBar = () => {
  const [isHamBurgerOpen, setIsHamBurgerOpen] = React.useState(false);
  const handleClick = () => {
    setIsHamBurgerOpen(!isHamBurgerOpen);
  };
  return (
    <>
      <nav className="navbar-header">
        <div className="a">
          <Link
            className={isHamBurgerOpen ? "metaIMG-mobile" : "metaIMG"}
            to="/"
          >
            <img src="./images/PNG_LOGO_01.png" alt="" className="logo" />
          </Link>
        </div>
        <ul className={isHamBurgerOpen ? "nav-links-mobile" : "nav-links"}></ul>
        <button className="mobile-menu-icon" onClick={handleClick}>
          {isHamBurgerOpen ? (
            <i className="fas fa-times" style={{ color: "white" }}></i>
          ) : (
            <i className="fas fa-bars" style={{ color: "white" }}></i>
          )}
        </button>
      </nav>
    </>
  );
};

export default DashBoardNavBar;
