import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "registerCarform2Images",
  initialState: {
    value: {
      exteriorCarImage: "",
      interiorImage: "",
    },
  },
  reducers: {
    setexteriorCarImage: (state, action) => {
      // console.log(action);
      state.value.exteriorCarImage = action.payload;
      console.log(state.value.exteriorCarImage);
    },
    setinteriorImage: (state, action) => {
      // console.log(action);
      state.value.interiorImage = action.payload;
      console.log(state.value.interiorImage);
    },
  },
});

export const { setexteriorCarImage, setinteriorImage } = userSlice.actions;
export default userSlice.reducer;
