import React, { useEffect } from "react";
// import Header from "../reusableComponents/Header";
import { Cars } from "./ApproveCarsData";
// import NavBar from "./SearcACarNav";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../SidebarForAdmin/SidebarAdmin";
import Footer from "../../Footer/Footer";
import { setResponseApproveCars } from "../../../../reducers/ResponseApproveCars";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const CarsForApproval = () => {
  const data = useSelector((state) => state.responseApproveCars.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/cars");
        console.log(res);

        dispatch(setResponseApproveCars(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCars();
  }, []);

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
            <div className="flex flex-col items-center justify-center">
              <div className="flex  gap-10 justify-center">
                <img
                  src={car.Image}
                  alt=""
                  className="h-40 w-[50vh] md:h-50 md:w-[60vh] lg:h-60 lg:w-[70vh] "
                />
                <div className="flex flex-col items-center">
                  <div className="flex gap-5 flex-wrap">
                    <h1 className="font-black text-[25px]">{car.Name}</h1>
                    <h1 className="font-medium text-[25px]">{car.Price}</h1>

                    <h3 className="font-medium text-[25px]">
                      With Driver: {car.Driver}
                    </h3>
                    <h3 className=" text-[25px]">
                      Driver Name:{" "}
                      <span className="font-black text-[20px]">{car.name}</span>
                    </h3>
                    <h3 className="font-medium text-[25px]">
                      Driver Number: <span>{car.Phone}</span>
                    </h3>
                    <h3 className="font-medium text-[25px]">
                      Driver CNIC: <span>{car.CNIC}</span>
                    </h3>
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
                        mt: "80%",
                        color: "white",
                        backgroundColor: "#060B26",
                        "&:hover": {
                          backgroundColor: "gray",
                          color: "#060B26",
                        },
                      }}
                      className="w-60 md:w-80 lg:w-96 xl:w-[100%]"
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="w-[100%] h-[20px]" />
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

export default CarsForApproval;
