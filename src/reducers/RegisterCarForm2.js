import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "registerCarform2",
  initialState: {
    value: {
      // exteriorCarImage: "",
      // interiorImage: "",

      insurance: "",
      tracker: "",
    },
  },
  reducers: {
    setRegisterCarform2: (state, action) => {
      // console.log("action.payload", action.payload);
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
    setexteriorCarImage: (state, action) => {
      // console.log(action);
      state.value.exteriorCarImage = action.payload;
    },
    setinteriorImage: (state, action) => {
      // console.log(action);
      state.value.interiorImage = action.payload;
    },

    setinsurance: (state, action) => {
      // console.log(action);
      state.value.insurance = action.payload;
      // console.log(state.value.insurance);
    },
    settracker: (state, action) => {
      // console.log(action);
      state.value.tracker = action.payload;
    },
  },
});

export const {
  setRegisterCarform2,
  setexteriorCarImage,
  setinteriorImage,
  settracker,
  setDriver,
  setinsurance,
} = userSlice.actions;
export default userSlice.reducer;
