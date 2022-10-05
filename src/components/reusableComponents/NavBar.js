import React from "react";
import Box from "@mui/material/Box";
import "./navbar.css";
import BasicDatePicker from "./DatePickerForNavBar";
import ResponsiveTimePickers from "./Timer";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRentalServiceType } from "../../reducers/RentalServiceType";
import { useSelector } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.rentalType);
  const ariaLabel = { "aria-label": "description" };
  const navigate = useNavigate();
  const handleChange = (event) => {
    let { name, value } = event.target;
    dispatch(setRentalServiceType({ [name]: value }));
  };
  const handleDate = (date) => {
    dispatch(setRentalServiceType({ dateFrom: date }));
  };

  const handleTime = (time) => {
    dispatch(setRentalServiceType({ time: time }));
  };

  return (
    <>
      <div className="NavBarContainer">
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              pt: "0px",
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              placeholder="Enter Pick-Up Location *"
              inputProps={ariaLabel}
              name="location"
              onChange={handleChange}
              value={value.location}
              fullWidth
            />
          </Box>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 grid-rows-1">
            <div>
              <BasicDatePicker value={value.dateFrom} onChange={handleDate} />
            </div>
            <div>
              <ResponsiveTimePickers value={value.time} onChange={handleTime} />
            </div>
            <div className="flex flex-wrap items-center">
              <div className="flex items-center">
                <Radio
                  checked={value.duration === "Full Day"}
                  onChange={handleChange}
                  value="Full Day"
                  name="duration"
                  inputProps={{ "aria-label": "A" }}
                />
                <p className="text-xs">FULL DAY</p>
              </div>
              <div className="flex items-center">
                <Radio
                  checked={value.duration === "Short Rental"}
                  onChange={handleChange}
                  value="Short Rental"
                  name="duration"
                  inputProps={{ "aria-label": "B" }}
                />
                <p className="text-xs">SHORT RENTAL</p>
              </div>
              <div className="flex items-center">
                <Radio
                  checked={value.duration === "Self Drive"}
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
        <Button
          color="inherit"
          sx={{
            backgroundColor: "#161616",
            color: "white",
            borderRadius: "0",
            "&:hover": { backgroundColor: "#161614" },
          }}
          onClick={() => navigate("/search-a-car")}
        >
          Book Now
        </Button>
      </div>
    </>
  );
};

export default NavBar;
