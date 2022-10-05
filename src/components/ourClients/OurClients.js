import React from "react";
import Footer from "../reusableComponents/Footer";
import Header from "../reusableComponents/Header";

const OurClients = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <img
        src="./images/Privacy Policy.jpg"
        alt=""
        style={{
          height: " 480px",
          width: "100%",
          objectFit: "cover",
        }}
      />

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-sm md:text-[25px] lg:text-[28px] xl:text-[30px] 2xl:text-[50px] mt-20">
          OUR CLIENTS
        </h1>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default OurClients;
