import React from "react";
// import Header from "../reusableComponents/Header";
import { Cars } from "./InvestorsCarData";
// import NavBar from "./SearcACarNav";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../SideBarInvestor/Sidebar";
import Footer from "../Footer/Footer";
const InvestorsCars = () => {
  return (
    <div className="flex flex-col">
      <SideBar />
      {/* <div className="pt-40 ">
        <NavBar />
      </div> */}
      {/* <div className="pt-10 pl-10">
        <h1 className="font-bold pb-5">Search A Car</h1>
        <TextField
          id="standard-basic"
          label="Name of the Car"
          variant="outlined"
          sx={{ pt: "10px" }}
          // fullWidth
        /> */}
      {/* </div> */}
      <div className=" pt-10 flex flex-col space-y-20 items-center">
        {Cars.map((car) => {
          return (
            <div className="flex flex-col items-center">
              <div className="flex  gap-10 flex-wrap justify-center">
                <img
                  src={car.Image}
                  alt=""
                  className="h-40 w-[50vh] md:h-50 md:w-[60vh] lg:h-60 lg:w-[70vh] "
                />
                <div className="flex flex-col items-center">
                  <div className="flex gap-40">
                    <h1 className="font-black text-[25px]">{car.Name}</h1>
                    <h1 className="font-medium text-[25px]">{car.Price}</h1>
                  </div>
                  <div>
                    <Button
                      color="inherit"
                      size="large"
                      variant="text"
                      sx={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        alignSelf: "center",
                        mt: "90%",
                        color: "white",
                        backgroundColor: "#060B26",
                        "&:hover": {
                          backgroundColor: "gray",
                          color: "#060B26",
                        },
                      }}
                      className="w-60 md:w-80 lg:w-96 xl:w-[100%]"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <hr className="w-[100%] h-[20px]" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default InvestorsCars;
