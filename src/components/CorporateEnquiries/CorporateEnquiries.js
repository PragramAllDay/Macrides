import React from "react";
import Header from "../reusableComponents/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../reusableComponents/Footer";
const CorporateEnquiries = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div
          className="flex flex-col"
          style={{ margin: "0 auto", padding: "0 50px" }}
        >
          <h1 className="font-bold text-[20px] md:text-[23px] lg:[25px] xl:text-[30px] pt-20 md:pt-30 lg:pt-40 xl:pt-50">
            CORPORATE ENQUIRIES
          </h1>
          <br />
          <h3>
            Please fill out the form below and our representatives will be in
            touch with you shortly
          </h3>
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
              label="Location*"
              variant="standard"
              type={"text"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div className="flex flex-wrap gap-8 pt-8">
            <TextField
              id="standard-basic"
              label="No of Cars*"
              variant="standard"
              type={"number"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="No of Days*"
              variant="standard"
              type={"number"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div className="pt-10">
            <TextField
              id="outlined-multiline-static"
              label="Purpose of enquiry"
              multiline
              rows={1}
              className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
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
              alignSelf: "center",
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
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default CorporateEnquiries;
