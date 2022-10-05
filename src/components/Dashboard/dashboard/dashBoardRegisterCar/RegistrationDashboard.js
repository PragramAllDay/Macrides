import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../../../reusableComponents/Header";
import FileUploader from "../../../becomeAChauffer/FileUploader";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";
// import Footer from "../reusableComponents/Footer";
import Switch from "@mui/material/Switch";
import { setRegisterCar } from "../../../../reducers/RegisterCar";
import {
  setcnicBack,
  setcnicFront,
  setlicenseBack,
  setlicenseFront,
} from "../../../../reducers/RegisterImagesDriver";
import {
  setLicenseFront,
  setDriver,
  setGender,
  setMaritalStatus,
} from "../../../../reducers/RegisterCar";
import SideBar from "../../SideBarInvestor/Sidebar";
import Footer from "../../Footer/Footer";
import {
  setexteriorCarImage,
  setinteriorImage,
} from "../../../../reducers/RegisterCarImages";
import {
  setRegisterCarform2,
  setinsurance,
  settracker,
} from "../../../../reducers/RegisterCarForm2";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function RegisterYourCarPanel({ handleClose }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [marriedStatus, setMarriedStatus] = React.useState("Single");
  const [genderStatus, setGenderStatus] = React.useState("Male");
  const [driverStatus, setDriverStatus] = React.useState(true);
  const labeled = { inputProps: { "aria-label": "Switch demo" } };
  const [terms, setTerms] = React.useState(true);
  const [terms2, setTerms2] = React.useState(true);
  const [trackerStatus, setTrackerStatus] = React.useState(false);
  const [insuranceStatus, setInsuranceStatus] = React.useState(false);
  const formData = useSelector((state) => state.registerCarform2.value);
  const images = useSelector((state) => state.registerCarform2Images.value);
  const ref = "api::car.car";

  const termsandconditions = () => {
    setTerms(!terms);
  };
  const termsandconditions2 = () => {
    setTerms2(!terms2);
  };

  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobilenumber: "",
    cnic: "",
    license: "",
    city: "",
    experience: "",
    previousEmployer: "",
    CurrentEmployer: "",
  });

  const [dataForm2, setDataForm2] = React.useState({
    title: "",
    location: "",
    ownerName: "",
    email: "",
    mobilenumber: "",
    regNo: "",
    regCity: "",
    year: "",
    transmission: "",
    color: "",
    mileage: "",
  });

  const SendMassiveLoads = async () => {
    let formdata = new FormData();
    formdata.append(
      "files.exteriorCarImage",
      images.exteriorCarImage,
      images.exteriorCarImage.name
    );
    formdata.append(
      "files.interiorImage",
      images.interiorImage,
      images.interiorImage.name
    );
    formdata.append("data", JSON.stringify({ ...formData, driverStatus }));

    // console.log(formData);
    if (terms2) {
      if (driverStatus) {
        try {
          const response = await axios.post(
            "http://localhost:1337/api/cars",
            formdata
          );
          console.log(response);
          const { data } = response;
          // const { attributes } = data.data;

          // if (response) {
          //   console.log(attributes);
          //   const resp = await axios.put(
          //     `http://localhost:1337/api/cars/${data.data.id}`,
          //     {
          //       data: {
          //         // title: attributes.title,
          //         formdata,
          //       },
          //       headers: {
          //         "content-type": "multipart/form-data",
          //       },
          //     }
          //   );
          //   console.log(resp);
          // }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Please accept terms and conditions");
    }
  };

  const handleChangeFieldsForm2 = (event) => {
    let { name, value } = event.target;
    setDataForm2({ ...dataForm2, [event.target.name]: event.target.value });
    dispatch(setRegisterCarform2({ [name]: value }));
  };

  const convertFileCNICFront = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = () => {
    dispatch(setcnicFront(file));

    // console.log(reader.result);
    // };
  };
  const convertFileCNICBack = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = () => {
    dispatch(setcnicBack(file));
    // console.log(reader.result);
    // };
  };

  const convertFileLicenseBack = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = () => {
    dispatch(setlicenseBack(file));
    // console.log(reader.result);
    // };
  };
  const convertFileLicenseFront = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = () => {
    dispatch(setlicenseFront(file));
    // console.log(reader.result);
    // };
  };
  const convertFileCarExterior = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = () => {
    dispatch(setexteriorCarImage(file));
    // console.log(reader.result);
    // };
  };
  const convertFileCarInterior = (file) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = () => {
    dispatch(setinteriorImage(file));
    // console.log(reader.result);
    // };
  };
  const handleChange = (event, newValue) => {
    setValue(1);
    setDriverStatus(true);
    dispatch(setDriver({ Driver: driverStatus }));
  };
  const handleChangeGender = (event) => {
    dispatch(setGender(event.target.value));
    setGenderStatus(event.target.value);
  };
  const handleChangeInsurance = (event) => {
    dispatch(setinsurance(event.target.value));
    setInsuranceStatus(!insuranceStatus);
  };
  const handleChangeTracker = (event) => {
    dispatch(settracker(event.target.value));
    setTrackerStatus(!trackerStatus);
  };
  const handleChangeMaritalStatus = (event) => {
    dispatch(setMaritalStatus(event.target.value));
    setMarriedStatus(event.target.value);
  };

  const handleChangeIndex = (index) => {};

  const handleSubmitDriver = (e) => {
    e.preventDefault();
  };

  const handleChangeFields = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [event.target.name]: event.target.value });
    dispatch(setRegisterCar({ [name]: value }));
  };

  return (
    <div>
      <SideBar />
      <Box
        sx={{ bgcolor: "background.paper", height: "100%" }}
        className="pt-15"
      >
        <AppBar position="static" sx={{ backgroundColor: "#060B26" }}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Driver Details"
              {...a11yProps(0)}
              sx={{ color: "white", fontWeight: "600" }}
            />
            <Tab
              label="Vehicle Details"
              {...a11yProps(1)}
              sx={{ color: "white", fontWeight: "600" }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          onSwitching={(value, state) => {
            if (state == "end") {
              setValue(value);
            }
          }}
        >
          <TabPanel value={0} index={0} dir={theme.direction}>
            <div className="flex  flex-col pl-5 ml-5 md:ml-7 md:pl-10 lg:ml-10 lg:pl-15 xl:ml-10 xl:pl-20 ">
              <div>
                <Button
                  color="inherit"
                  size="large"
                  variant="text"
                  onClick={handleChange}
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",

                    mt: "5%",
                    color: "white",
                    backgroundColor: "#060B26",
                    // width: "15%",
                    // minWidth: "200px",
                    "&:hover": { backgroundColor: "gray", color: "#060B26" },
                  }}
                >
                  Register Without Driver
                </Button>
              </div>
              <br />
              <br />
              <br />
              <div className="flex flex-wrap gap-8 pt-6">
                <TextField
                  id="standard-basic"
                  label="First Name*"
                  name="firstName"
                  variant="standard"
                  sx={{ width: "35ch" }}
                  type={"text"}
                  onChange={handleChangeFields}

                  // fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Last Name*"
                  name="lastName"
                  variant="standard"
                  type={"text"}
                  sx={{ width: "35ch" }}
                  onChange={handleChangeFields}

                  // fullWidth
                />
              </div>
              <div className="flex flex-wrap gap-8 pt-8">
                <TextField
                  id="standard-basic"
                  label="Phone*"
                  name="phoneNo"
                  variant="standard"
                  type={"number"}
                  sx={{ width: "35ch" }}
                  onChange={handleChangeFields}

                  // fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Email Address*"
                  name="email"
                  variant="standard"
                  type={"email"}
                  sx={{ width: "35ch" }}
                  onChange={handleChangeFields}

                  // fullWidth
                />
              </div>
              <div className="pt-10">
                <TextField
                  id="outlined-multiline-static"
                  label="CNIC*"
                  name="CNIC"
                  multiline
                  rows={1}
                  className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
                  onChange={handleChangeFields}
                />
              </div>
              <div className="flex pt-8 gap-20 flex-wrap">
                <div className="flex flex-col">
                  <h1>CNIC Front Image"</h1>
                  <FileUploader handleFile={convertFileCNICFront} />
                </div>
                <div className="flex flex-col">
                  <h1>CNIC Back Image"</h1>
                  <FileUploader handleFile={convertFileCNICBack} />
                </div>
              </div>
              <div className="pt-10">
                <TextField
                  id="outlined-multiline-static"
                  label="LICENSE NUMBER*"
                  name="drivingLicense"
                  multiline
                  rows={1}
                  className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
                  onChange={handleChangeFields}
                />
              </div>
              <div className="flex pt-8 gap-20 flex-wrap">
                <div className="flex flex-col">
                  <h1>Lisense Front Image"</h1>
                  <FileUploader handleFile={convertFileLicenseFront} />
                </div>
                <div className="flex flex-col">
                  <h1>License Back Image"</h1>
                  <FileUploader handleFile={convertFileLicenseBack} />
                </div>
              </div>
              <div className="flex gap-10 flex-wrap">
                {" "}
                <div className="pt-5">
                  <h1>Marital Status:</h1>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={marriedStatus}
                    onChange={handleChangeMaritalStatus}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
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
                    value={genderStatus}
                    onChange={handleChangeGender}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
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
                  name="city"
                  multiline
                  rows={1}
                  className="w-[80%] md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[800px]"
                  onChange={handleChangeFields}
                />
              </div>
              <div className="flex flex-wrap gap-8 pt-6">
                <TextField
                  id="standard-basic"
                  label="Experience Years*"
                  name="experienceYears"
                  variant="standard"
                  type={"number"}
                  sx={{ width: "35ch" }}
                  onChange={handleChangeFields}

                  // fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Previous Employer's Name*"
                  name="previousEmployerName"
                  variant="standard"
                  type={"text"}
                  sx={{ width: "35ch" }}
                  onChange={handleChangeFields}

                  // fullWidth
                />
              </div>
              <div className="pt-8">
                <TextField
                  id="standard-basic"
                  label="Current Employer's Name*"
                  name="currentEmpName"
                  variant="standard"
                  type={"text"}
                  sx={{ width: "35ch" }}
                  onChange={handleChangeFields}

                  // fullWidth
                />
              </div>
              <div style={{}}>
                <p className="mt-5">
                  <Switch
                    {...labeled}
                    sx={{ width: "70px" }}
                    onClick={termsandconditions}
                    defaultChecked
                  />
                  I understand and agree the
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
                  type="submit"
                  onClick={() => {
                    if (terms) {
                      setValue(1);
                      setDriverStatus(true);
                      dispatch(setDriver({ Driver: true }));
                    } else {
                      alert("Please agree to terms and conditions");
                    }
                  }}
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",

                    mt: "5%",
                    color: "white",
                    backgroundColor: "#060B26",
                    width: "15%",
                    minWidth: "200px",
                    "&:hover": { backgroundColor: "gray", color: "#060B26" },
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabPanel>

          {/* second tab */}

          <TabPanel value={1} index={1} dir={theme.direction}>
            <>
              <div className="flex  flex-col pl-5 ml-5 md:ml-7 md:pl-10 lg:ml-10 lg:pl-15 xl:ml-10 xl:pl-20 ">
                <div>
                  <Button
                    color="inherit"
                    size="large"
                    variant="text"
                    onClick={() => {
                      setValue(0);
                      setDriverStatus(true);
                      dispatch(setDriver({ Driver: driverStatus }));
                    }}
                    sx={{
                      fontSize: "25px",
                      fontWeight: "bold",

                      mt: "5%",
                      color: "white",
                      backgroundColor: "#060B26",

                      "&:hover": { backgroundColor: "gray", color: "#060B26" },
                    }}
                  >
                    Register With Driver
                  </Button>
                </div>
                <br />
                <br />
                <br />
                <div className="flex flex-wrap gap-8 pt-6">
                  <TextField
                    id="standard-basic"
                    label="Vehicle*"
                    name="title"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Location*"
                    name="location"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                </div>
                <div className="flex flex-wrap gap-8 pt-6">
                  <TextField
                    id="standard-basic"
                    label="Owner Name*"
                    name="ownername"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Email Address*"
                    name="email"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                </div>
                <div className="flex flex-wrap gap-8 pt-6">
                  <TextField
                    id="standard-basic"
                    label="Mobile No*"
                    name="mobileno"
                    variant="standard"
                    type={"number"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Reg No*"
                    name="registrationno"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                </div>
                <div className="flex flex-wrap gap-8 pt-6">
                  <TextField
                    id="standard-basic"
                    label="Reg City*"
                    name="regCity"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Year*"
                    name="year"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                </div>
                <div className="flex flex-wrap gap-8 pt-6">
                  <TextField
                    id="standard-basic"
                    label="Transmission*"
                    name="transmission"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Color*"
                    name="color"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                </div>
                <div className="flex flex-wrap gap-8 pt-6">
                  <TextField
                    id="standard-basic"
                    label="Mileage*"
                    name="mileage"
                    variant="standard"
                    type={"text"}
                    sx={{ width: "35ch" }}
                    onChange={handleChangeFieldsForm2}

                    // fullWidth
                  />
                </div>
                <div className="flex pt-8 gap-20 flex-wrap">
                  <div className="flex flex-col">
                    <h1>Car Exterior Image"</h1>
                    <FileUploader handleFile={convertFileCarExterior} />
                  </div>
                  <div className="flex flex-col">
                    <h1>Car Interior Image"</h1>
                    <FileUploader handleFile={convertFileCarInterior} />
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <p className="mt-5">
                    <div className="flex flex-wrap">
                      <p className="mt-5">
                        <Switch
                          sx={{ width: "70px" }}
                          {...labeled}
                          value={insuranceStatus}
                          onClick={handleChangeInsurance}
                        />
                        Insurance Available
                      </p>
                      <p className="mt-5">
                        <Switch
                          sx={{ width: "70px" }}
                          {...labeled}
                          value={trackerStatus}
                          onClick={handleChangeTracker}
                        />
                        Tracker available
                      </p>
                    </div>
                    <p className="pt-5">
                      <Switch
                        sx={{ width: "70px" }}
                        {...labeled}
                        onClick={termsandconditions2}
                      />
                      I understand and agree the
                      <Link to="/terms-of-use" className="font-bold">
                        {" "}
                        Terms and Conditions.
                      </Link>
                    </p>
                  </p>
                </div>
                <Button
                  color="inherit"
                  size="large"
                  variant="text"
                  onClick={SendMassiveLoads}
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",

                    mt: "5%",
                    color: "White",
                    backgroundColor: "#060B26",
                    width: "15%",
                    minWidth: "200px",
                    "&:hover": { backgroundColor: "gray", color: "#060B26" },
                  }}
                >
                  Submit
                </Button>
              </div>
            </>
          </TabPanel>
        </SwipeableViews>
      </Box>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
