import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "responseApproveCars",
  initialState: {
    value: {},
  },
  reducers: {
    setResponseApproveCars: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { setResponseApproveCars } = userSlice.actions;

export default userSlice.reducer;
