import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "login",
  initialState: {
    value: {
      identifier: "",
      password: "",
      jwt: "",
    },
  },
  reducers: {
    setLogin: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
