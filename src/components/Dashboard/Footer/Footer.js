import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#060B26",
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
    </div>
  );
};

export default Footer;
