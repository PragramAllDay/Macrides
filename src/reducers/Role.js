import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "role",
  initialState: {
    value: {
      name: "",
    },
  },
  reducers: {
    setRole: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { setRole } = userSlice.actions;
export default userSlice.reducer;
