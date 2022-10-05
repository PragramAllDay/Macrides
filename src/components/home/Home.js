import React, { useEffect } from "react";
import Slider from "../reusableComponents/Slider/Slider";
import Header from "../reusableComponents/Header";
import NavBar from "../reusableComponents/NavBar";
import "./home.css";
import "../../index.css";
import SimpleAccordion from "./Accordion";
import { Link } from "react-router-dom";
import Footer from "../reusableComponents/Footer";
import AlertDialog from "./Popup/Popup";
import CustomArrows from "./blogCaraousal/CustomArrows";
const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <div className="NavBarCss">
        <NavBar />
      </div>
      <div className=" flex flex-col justify-center items-center mt-20">
        <h1 className="text-md sm:text-[23px] font-bold">
          What type of car are you looking for?
        </h1>
        <div className="flex gap-20 flex-wrap justify-center mt-10">
          <Link className="flex flex-col items-center">
            <img
              src="./images/Car-1.png"
              alt=""
              style={{
                height: "120px",
                width: "200px",
              }}
            />
            <h2 className="font-bold">Budget</h2>
          </Link>
          <Link className="flex flex-col items-center">
            <img
              src="./images/Car-2.png"
              alt=""
              style={{
                height: "120px",
                width: "200px",
              }}
            />
            <h2 className="font-bold">Standard</h2>
          </Link>
          <Link className="flex flex-col items-center">
            <img
              src="./images/Car-3.png"
              alt=""
              style={{
                height: "120px",
                width: "200px",
              }}
            />
            <h2 className="font-bold">Luxury</h2>
          </Link>
          <Link className="flex flex-col items-center">
            <img
              src="./images/Car-4.png"
              alt=""
              style={{
                height: "120px",
                width: "200px",
              }}
            />
            <h2 className="font-bold">SUV</h2>
          </Link>
          <Link className="flex flex-col items-center">
            <img
              src="./images/Car-5.png"
              alt=""
              style={{
                height: "120px",
                width: "200px",
              }}
            />
            <h2 className="font-bold">Vans {"&"} Coasters</h2>
          </Link>
        </div>
      </div>
      <div className="text-container">
        <h1
          className=" font-bold text-[25px] md:text-[23px] lg:text-[30px] xl:text-[40px]  mx-auto"
          style={{ color: "212529" }}
        >
          Why Choose Us?
        </h1>
        <p className="pt-15">
          Mac Ride Car Rental Service is widely regarded as one of the best Car
          Rental Service Providers serving not only Karachi but other major
          cities of Pakistan as well.
        </p>
        <br />
        <p>
          The Mac Ride team has extensive experience in renting cars in Karachi,
          allowing us to optimise your travel needs and make it simple for you
          to find the ideal vehicle for your journey. Our team of dedicated
          professionals strives to make your trip more enjoyable and is
          available to you 24 hours a day, seven days a week.
        </p>
        <br />
        <p className="font-bold text-sm md:text-[23px] lg:text-[25px] xl:text-[27px] ">
          Few Reasons To choose Mac Ride over other car rental Services:
        </p>
        <br />
        <ul>
          <li className="font-bold text-sm md:text-[15px] lg:text-[17px] xl:text-[22px]  pt-3">
            There are no hiding charges
            <br />
          </li>
          <p className="pt-3">
            Insurance is already included in the price of Rently Cars, so what
            you see online is exactly what you will be charged in addition to
            VAT and fuel.
          </p>
          <li className="font-bold text-sm md:text-[15px] lg:text-[17px] xl:text-[22px]  pt-3">
            FLexible Pricing Packages
          </li>
          <p className="pt-3">
            There is no such thing as one size fits all. Therefore Rently car
            rental offers flexible pricing packages. The packages are made in
            such a way that there is an optimal balance of time and kilometres
            for your needs and goals. You can always modify them as per your
            requirements.
          </p>
          <li className="font-bold text-sm md:text-[15px] lg:text-[17px] xl:text-[22px]  pt-3">
            24 Hours Assistance
          </li>
          <p className="pt-3">
            Mac Ride provides assistance 24 hours a day, seven days a week. In
            an unfortunate incident of a breakdown, we will send a replacement
            car as soon as possible. You are never too far away for us.
          </p>
        </ul>
        <br />
        <div>
          <h1 className="font-bold text-sm md:text-[30px] lg:text-[35px] xl:text-[27px]  text-center mt-20">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="mt-10">
            <SimpleAccordion />
          </div>
        </div>
        <div className="CustomArrows">
          <CustomArrows />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
