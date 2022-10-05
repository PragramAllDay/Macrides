import React from "react";
import Header from "../reusableComponents/Header";
import TextField from "@mui/material/TextField";
import Footer from "../reusableComponents/Footer";
import Button from "@mui/material/Button";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="flex  flex-col pl-5 ml-5 md:ml-7 md:pl-10 lg:ml-10 lg:pl-15 xl:ml-10 xl:pl-20">
          <h1 className="font-bold text-lg md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[50px] pt-20 md:pt-30 lg:pt-40 xl:pt-60">
            Contact Us
          </h1>
          <br />
          <br />
          <br />
          <div className="flex gap-40 flex-wrap">
            <div>
              {" "}
              <h1 className="font-bold">ADDRESS</h1>
              <p className="pt-3">Bahria Town Karachi</p>
            </div>
            <div>
              <h1 className="font-bold">Call</h1>
              <p className="pt-3">Whatsapp: +92 334 219 7802</p>
            </div>
            <br />
            <br />
            <br />
          </div>

          <h1 className="font-bold text-sm md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[30px] pt-4">
            GET IN TOUCH
          </h1>
          <div className="flex flex-wrap gap-8 pt-8">
            <TextField
              id="standard-basic"
              label="Name*"
              variant="standard"
              type={"text"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Email Address*"
              variant="standard"
              type={"email"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div className="flex flex-wrap gap-8 pt-8">
            <TextField
              id="standard-basic"
              label="Phone*"
              variant="standard"
              type={"number"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Company*"
              variant="standard"
              type={"text"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div className="pt-10">
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
            />
          </div>
          <Button
            color="inherit"
            size="large"
            variant="text"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",

              mt: "5%",
              color: "white",
              backgroundColor: "#161614",
              width: "15%",
              minWidth: "200px",
              "&:hover": { backgroundColor: "#161614" },
            }}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="mt-10 pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
