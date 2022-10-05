import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div
          className="flex flex-col sm:flex-row sm:h-[110px] items-center justify-center gap-4"
          style={{
            backgroundColor: "#F6F7FB",
            // height: "110px",
            width: "100%",
            color: "#161614",
            fontWeight: "bold",
            fontSize: "13px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/about-us">ABOUT US </Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/our-clients">OUR CLIENTS </Link>
          <span className="hidden sm:inline">|</span>

          <Link to="/ChauffuerSignUp">BECOME A CHAUFFER </Link>
          <span className="hidden sm:inline">|</span>

          <Link to="/register-your-car">REGISTER YOUR CAR </Link>
          <span className="hidden sm:inline">|</span>

          <Link to="/terms-of-use">TERMS OF USE </Link>
          <span className="hidden sm:inline">|</span>

          <Link to="/privacy-policy">PRIVACY POLICY </Link>
          <span className="hidden sm:inline">|</span>

          <Link to="/contact-us">CONTACT US </Link>

          <span className="hidden sm:inline">|</span>

          <Link to="/faqs">FAQs </Link>
          <span className="hidden sm:inline">|</span>

          {/* <Link>SITEMAP </Link>
          <span className="hidden sm:inline">|</span> */}

          <Link to="/blog">BLOG </Link>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#212529",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          height: "110px",
        }}
        className="footer-under-footer"
      >
        <div className="main-footer">
          <h1 className="text-white font-light  text-sm md:text-[23px] text-center">
            All rights reserved.MAC Ride 2022 | Car Rental Service- Powered by
            BRDigitech
          </h1>
          <div className="monto-footer">
            <img
              src="./images/consumer choice award.png"
              alt=""
              className="h-20px w-20px"
              style={{
                height: " 60px",
                width: "70px",
                objectFit: " cover",
              }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white h-10 mt-3 ml-4"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white h-10 mt-3 ml-4"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white h-10 mt-3 ml-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
