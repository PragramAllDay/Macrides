import React from "react";
import { Link } from "react-router-dom";
import DialogueLoginBox from "./DialogueLoginBox";
import "./header.css";

const Header = () => {
  const [isHamBurgerOpen, setIsHamBurgerOpen] = React.useState(false);
  const handleClick = () => {
    setIsHamBurgerOpen(!isHamBurgerOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="a">
          <Link
            className={isHamBurgerOpen ? "metaIMG-mobile" : "metaIMG"}
            to="/"
          >
            <img src="./images/PNG_LOGO_01.png" alt="" className="logo" />
            {/* <h3 className="metaIMGText">
              MAC<span style={{ color: "#E8DE96" }}>Ride</span>
            </h3> */}
          </Link>
        </div>
        <ul className={isHamBurgerOpen ? "nav-links-mobile" : "nav-links"}>
          <Link to="/about-us" className="aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/search-a-car" className="searchacar">
            <li>Search A Car</li>
          </Link>
          <Link to="/corporate-enquiries" className="corporatenquiries">
            <li>Corporate Enquiries</li>
          </Link>
          <Link to="/our-clients" className="ourclients">
            <li>Our Clients</li>
          </Link>
          <Link to="/blog" className="blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact-us" className="contactus">
            <li>Contact Us</li>
          </Link>
          <h1 className="login">
            <li style={{ cursor: "pointer" }}>
              <DialogueLoginBox />
            </li>
          </h1>
          <h1 className="separator">|</h1>
          <Link to="/sign-up" className="signup">
            <li>Signup</li>
          </Link>
        </ul>
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

export default Header;
