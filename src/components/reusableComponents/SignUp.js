import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../reusableComponents/Header";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUIPickers from "./DatePicker";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { setRegister } from "../../reducers/RegisterInvestor";
import BasicDatePicker from "./DatePickerForNavBar";
import axios from "axios";

export default function BasicTextFields() {
  const labeled = { inputProps: { "aria-label": "Switch demo" } };
  const [valued, setValued] = React.useState(0);
  const { value } = useSelector((state) => state.register);
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobilenumber: "",
    role: "3",
  });
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValued(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        data,
        value.dateFrom
      );
      const resp = await axios.put(
        `http://localhost:1337/api/users/${response.data.user.id}`,
        {
          role: "3",
        }
      );
      console.log(resp);
      window.localStorage.setItem("jwt", response.data.jwt);
      window.localStorage.setItem("role", resp.data.role.name);
      dispatch(setRegister(resp.data));
      if (resp) {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDate = (date) => {
    dispatch(setRegister({ dateFrom: date }));
  };
  const handleChangeTextField = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [event.target.name]: event.target.value });
    dispatch(setRegister({ [name]: value }));
  };

  return (
    <>
      <Header />
      <h1
        className=" font-bold text-xl text-center #161614	 text-[30px] pt-40"
        sx={{ color: "#161614" }}
      >
        SIGNUP
      </h1>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },

            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            columnGap: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15%",
              width: "78%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="standard-basic"
              label="First Name*"
              name="firstName"
              variant="standard"
              sx={{ width: "35ch" }}
              onChange={handleChangeTextField}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Last Name*"
              name="lastName"
              variant="standard"
              sx={{ width: "35ch" }}
              onChange={handleChangeTextField}
              // fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "15%",
              flexWrap: "wrap",
              width: "78%",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Mobile No*"
              name="mobilenumber"
              variant="standard"
              type={"number"}
              sx={{ width: "35ch" }}
              onChange={handleChangeTextField}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Email Address*"
              name="email"
              variant="standard"
              type={"email"}
              sx={{ width: "35ch" }}
              onChange={handleChangeTextField}
              // fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15%",
              width: "78%",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Password*"
              name="password"
              type={"password"}
              variant="standard"
              sx={{ width: "35ch" }}
              onChange={handleChangeTextField}
              // fullWidth
            />
            <TextField
              id="standard-basic"
              label="Confirm Password*"
              name="confirmPassword"
              type={"password"}
              variant="standard"
              sx={{ width: "35ch" }}
              onChange={handleChangeTextField}
              // fullWidth
            />
          </div>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            // marginTop: "2%",s
            gap: "18%",
          }}
        >
          <TextField
            id="standard-basic"
            label="username*"
            name="username"
            type={"text"}
            variant="standard"
            sx={{ width: "35ch", marginTop: "20px" }}
            onChange={handleChangeTextField}
            // fullWidth
          />
          {/* <div className="pt-5">
            <h1>Gender:</h1>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={valued}
              onChange={handleChange}
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <h1>Date of Birth:</h1>
            <BasicDatePicker value={value.dateFrom} onChange={handleDate} />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "60%",
            margingTop: "20px",
            marginLeft: "21%",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="How did you hear about us*"
            variant="standard"
            fullWidth
          />

          <p className="mt-5">
            <Switch sx={{ width: "70px" }} {...labeled} defaultChecked />I
            understand and agree that the use of this Website, Mobile Apps, AI
            and ALL other related Technology Platforms are subject to the Terms
            of Use and Privacy Policy.
          </p>
          <Button
            color="inherit"
            size="large"
            variant="text"
            type="submit"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",

              mt: "5%",
              color: "white",
              backgroundColor: "#161614",
              width: "50%",
              minWidth: "200px",
              "&:hover": { backgroundColor: "#161614" },
            }}
          >
            <h1 className="text-white">SIGNUP</h1>
          </Button>
        </Box>
      </form>
      <Footer />
    </>
  );
}
