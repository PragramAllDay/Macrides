import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "RentalServiceType",
  initialState: {
    value: {
      duration: "",
      location: "",
    },
  },
  reducers: {
    setRentalServiceType: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { setRentalServiceType } = userSlice.actions;

export default userSlice.reducer;
