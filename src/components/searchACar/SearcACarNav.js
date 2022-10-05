import React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import "./SearchNav.css";
import BasicDatePicker from "../reusableComponents/DatePickerForNavBar";
import ResponsiveTimePickers from "../reusableComponents/Timer";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import { useDispatch } from "react-redux";
import { setRentalServiceType } from "../../reducers/RentalServiceType";
import { useSelector } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  const ariaLabel = { "aria-label": "description" };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedValue, setSelectedValue] = React.useState("a");
  const { duration, dateFrom, location, time } = useSelector(
    (state) => state.rentalType.value
  );
  console.log(duration, dateFrom, location);

  const handleChange = (event) => {
    let { name, value } = event.target;
    dispatch(setRentalServiceType({ [name]: value }));
  };

  const handleDateChange = (date) => {
    dispatch(setRentalServiceType({ dateFrom: date }));
  };
  const handleTimeChange = (time) => {
    dispatch(setRentalServiceType({ time: time }));
  };

  return (
    <>
      <div className="NavBarContainerSearch">
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              placeholder="Enter Pick-Up Location *"
              inputProps={ariaLabel}
              fullWidth
              value={location}
              variant="filled"
            />
          </Box>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap gap-10 justify-center">
              <BasicDatePicker
                fullWidth={false}
                value={dateFrom}
                onChange={handleDateChange}
              />
              <ResponsiveTimePickers value={time} onChange={handleTimeChange} />
              <div className="flex flex-wrap items-center">
                <div className="flex items-center">
                  <Radio
                    checked={duration === "Full Day"}
                    onChange={handleChange}
                    value="Full Day"
                    name="duration"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <p className="text-xs">FULL DAY</p>
                </div>
                <div className="flex items-center">
                  <Radio
                    checked={duration === "Short Rental"}
                    onChange={handleChange}
                    value="Short Rental"
                    name="duration"
                    inputProps={{ "aria-label": "B" }}
                  />
                  <p className="text-xs">SHORT RENTAL</p>
                </div>
                <div className="flex items-center">
                  <Radio
                    checked={duration === "Self Drive"}
                    onChange={handleChange}
                    value="Self Drive"
                    name="duration"
                    inputProps={{ "aria-label": "C" }}
                  />
                  <p className="text-xs">SELF DRIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          color="inherit"
          sx={{
            backgroundColor: "#161616",

            color: "white",
            borderRadius: "0",
            "&:hover": { backgroundColor: "#161614" },
          }}
        >
          Book Now
        </Button>
      </div>
    </>
  );
};

export default NavBar;
