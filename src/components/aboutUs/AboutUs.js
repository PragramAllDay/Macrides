import React from "react";
import Header from "../reusableComponents/Header";
import "./aboutus.css";
import Footer from "../reusableComponents/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <img src="images\aboutus.jpg" alt="" className="imageaboutus" />
      <div className="flex justify-center">
        <div className="container">
          <h1
            className=" font-bold text-sm md:text-[23px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] text-center"
            style={{ color: "212529" }}
          >
            ABOUT US
          </h1>
          <p className="pt-5">
            Powered by state-of-the-art technology, MAC Ride is the first of its
            kind, on-demand, car-rental marketplace geared to disrupt the
            traditional renting industry.
          </p>
          <br />
          <p>
            MAC Ride's car-rental services are available at your fingertips
            online, for a more modern and convenient customer experience.
          </p>
          <br />
          <p>
            MAC Ride's provides both on-demand and pre-scheduled vehicles for
            any situation, occasion or event, such as:
          </p>
          <br />
          <ul>
            <li>Corporate Office Staff</li>
            <li>Tours and Trips</li>
            <li>Weddings</li>
            <li>Families / Indiviuals</li>
          </ul>
          <br />
          <p>
            One of the biggest strengths of MAC Ride's is its versatility. Our
            wide-range of latest models and well-maintained cars, is suited for
            everyone and all occasions.
          </p>
          <br />
          <p className="pb-5">
            At MAC Ride, each car and driver must undergo ‘MAC Ride Selection
            Tests’ before becoming operational. Quality, being the cornerstone
            of MAC Ride services, is ensured in every mile.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
