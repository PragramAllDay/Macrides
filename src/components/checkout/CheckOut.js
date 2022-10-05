import React from "react";
import Header from "../reusableComponents/Header";
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
import Footer from "../reusableComponents/Footer";
import BasicDatePicker from "../reusableComponents/DatePickerForNavBar";
import ResponsiveTimePickers from "../reusableComponents/Timer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setRentalServiceType } from "../../reducers/RentalServiceType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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

export default function RegisterYourCar({ handleClose }) {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { location, duration, dateFrom, time } = useSelector(
    (state) => state.rentalType.value
  );

  const [hours, setHours] = React.useState("");
  const handleChangeMenue = (event) => {
    setHours(event.target.value);
  };

  const [value, setValue] = React.useState(0);
  const labeled = { inputProps: { "aria-label": "Switch demo" } };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTimeFrom = (time) => {
    dispatch(setRentalServiceType({ time: time }));
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleDateFrom = (date) => {
    dispatch(setRentalServiceType({ dateFrom: date }));
  };

  return (
    <div>
      <Header />
      <Box
        sx={{ bgcolor: "background.paper", height: "100%" }}
        className="pt-40"
      >
        <AppBar position="static" sx={{ backgroundColor: "#D9EB3D" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="1-Pick-Up"
              {...a11yProps(0)}
              sx={{ color: "black", fontWeight: "600" }}
            />
            <Tab
              label="2-Drop-Off"
              {...a11yProps(1)}
              sx={{ color: "black", fontWeight: "600" }}
            />
            <Tab
              label="3-Base Rental"
              {...a11yProps(2)}
              sx={{ color: "black", fontWeight: "600" }}
            />
            <Tab
              label="4-Confirm"
              {...a11yProps(3)}
              sx={{ color: "black", fontWeight: "600" }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={0} index={0} dir={theme.direction}>
            <div className="flex flex-col items-center">
              <h1 className="pb-10">
                You are using <span className="font-bold">{duration} </span>
              </h1>
              <div className="flex flex-col gap-8">
                <BasicDatePicker value={dateFrom} onChange={handleDateFrom} />
                <ResponsiveTimePickers value={time} onChange={handleTimeFrom} />
                <TextField
                  id="outlined-basic"
                  label="Pick-Up Location"
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Additional Pick-Up Description"
                  multiline
                  rows={2}
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
                  color: "black",
                  backgroundColor: "#D9EB3D",
                  width: "12%",
                  minWidth: "160px",
                  "&:hover": { backgroundColor: "black", color: "#D9EB3D" },
                }}
              >
                Next
              </Button>
            </div>
          </TabPanel>
          <TabPanel value={1} index={1} dir={theme.direction}>
            <div className="flex flex-col items-center pt-10 gap-8">
              <div className="flex flex-col gap-8">
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Hours</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hours}
                    label="Hours"
                    onChange={handleChangeMenue}
                  >
                    <MenuItem value={5}>5 Hours</MenuItem>
                    <MenuItem value={6}>6 Hours</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Pick-Up Location"
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Additional Pick-Up Description"
                  multiline
                  rows={2}
                  className=" w-[300px] md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[800px]"
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
                  color: "black",
                  backgroundColor: "#D9EB3D",
                  width: "12%",
                  minWidth: "160px",
                  "&:hover": { backgroundColor: "black", color: "#D9EB3D" },
                }}
              >
                Next
              </Button>
            </div>
          </TabPanel>
          <TabPanel value={2} index={2} dir={theme.direction}></TabPanel>
          <TabPanel value={3} index={3} dir={theme.direction}></TabPanel>
        </SwipeableViews>
      </Box>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}
