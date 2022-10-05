import React from "react";
import Header from "../reusableComponents/Header";
import { TextField } from "@mui/material";
import FileUploader from "./FileUploader";
import Checkbox from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Footer from "../reusableComponents/Footer";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const BecomeAChauffuer = () => {
  const [value, setValue] = React.useState("female");
  const labeled = { inputProps: { "aria-label": "Switch demo" } };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="flex  flex-col pl-5 ml-5 md:ml-7 md:pl-10 lg:ml-10 lg:pl-15 xl:ml-10 xl:pl-20 ">
          <h1 className="font-bold text-lg md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[50px] pt-20 md:pt-30 lg:pt-40 xl:pt-60">
            BECOME A CHAUFFEUR
          </h1>
          <br />
          <br />
          <br />
          <div className="flex flex-wrap gap-8 pt-6">
            <TextField
              id="standard-basic"
              label="First Name*"
              variant="standard"
              type={"text"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Last Name*"
              variant="standard"
              type={"text"}
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
              label="Email Address*"
              variant="standard"
              type={"email"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div className="pt-10">
            <TextField
              id="outlined-multiline-static"
              label="CNIC*"
              multiline
              rows={1}
              className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
            />
          </div>
          <div className="flex pt-8 gap-20 flex-wrap">
            <div className="flex flex-col">
              <h1>CNIC Front Image"</h1>
              <FileUploader />
            </div>
            <div className="flex flex-col">
              <h1>CNIC Back Image"</h1>
              <FileUploader />
            </div>
          </div>
          <div className="pt-10">
            <TextField
              id="outlined-multiline-static"
              label="LICENSE NUMBER*"
              multiline
              rows={1}
              className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
            />
          </div>
          <div className="flex pt-8 gap-20 flex-wrap">
            <div className="flex flex-col">
              <h1>Lisense Front Image"</h1>
              <FileUploader />
            </div>
            <div className="flex flex-col">
              <h1>License Back Image"</h1>
              <FileUploader />
            </div>
          </div>
          <div className="flex gap-10 flex-wrap">
            {" "}
            <div className="pt-5">
              <h1>Marital Status:</h1>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                />
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
              </RadioGroup>
            </div>
            <div className="pt-5">
              <h1>Gender:</h1>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="pt-10">
            <TextField
              id="outlined-multiline-static"
              label="Which city are you from?*"
              multiline
              rows={1}
              className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
            />
          </div>
          <div className="flex flex-wrap gap-8 pt-6">
            <TextField
              id="standard-basic"
              label="Experience Years*"
              variant="standard"
              type={"number"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Previous Employer's Name*"
              variant="standard"
              type={"text"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div className="pt-8">
            <TextField
              id="standard-basic"
              label="Previous Employer's Name*"
              variant="standard"
              type={"text"}
              sx={{ width: "35ch" }}
              // fullWidth
            />
          </div>
          <div style={{}}>
            <p className="mt-5">
              <Switch sx={{ width: "70px" }} {...labeled} defaultChecked />I
              understand and agree the
              <Link to="/terms-of-use" className="font-bold">
                {" "}
                Terms and Conditions.
              </Link>
            </p>
          </div>
          <div>
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
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default BecomeAChauffuer;
