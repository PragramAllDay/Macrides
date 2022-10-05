import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "register",
  initialState: {
    value: {
      role: "3",
    },
  },
  reducers: {
    setRegister: (state, action) => {
      // console.log("action.payload", action.payload);
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { setRegister } = userSlice.actions;

export default userSlice.reducer;
