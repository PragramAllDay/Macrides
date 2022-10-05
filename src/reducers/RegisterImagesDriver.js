import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "registerCarform2Images",
  initialState: {
    value: {
      cnicFrontImage: "",
      cnicBackImage: "",
      licenseFront: "",
      licenseBack: "",
    },
  },
  reducers: {
    setcnicFront: (state, action) => {
      // console.log(action);
      state.value.cnicFrontImage = action.payload;
      console.log(state.value.cnicFrontImage);
    },
    setcnicBack: (state, action) => {
      // console.log(action);
      state.value.cnicBackImage = action.payload;
    },
    setlicenseFront: (state, action) => {
      // console.log(action);
      state.value.licenseFront = action.payload;
    },
    setlicenseBack: (state, action) => {
      // console.log(action);
      state.value.licenseBack = action.payload;
    },
  },
});

export const { setcnicBack, setcnicFront, setlicenseBack, setlicenseFront } =
  userSlice.actions;
export default userSlice.reducer;
