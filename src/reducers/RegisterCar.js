import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "registerCar",
  initialState: {
    value: {
      Driver: "true",
      Gender: "",
      MaritalStatus: "",
    },
  },
  reducers: {
    setRegisterCar: (state, action) => {
      console.log("action.payload", action.payload);
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },

    setDriver: (state, action) => {
      // console.log(action);
      state.value.Driver = action.payload;
    },
    setGender: (state, action) => {
      // console.log(action);
      state.value.Gender = action.payload;
    },
    setMaritalStatus: (state, action) => {
      // console.log(action);
      state.value.MaritalStatus = action.payload;
    },
  },
});

export const {
  setRegisterCar,

  setDriver,
  setGender,
  setMaritalStatus,
} = userSlice.actions;
export default userSlice.reducer;
