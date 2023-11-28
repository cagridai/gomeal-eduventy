import { createSlice } from "@reduxjs/toolkit";

const foodOrderSlice = createSlice({
  name: "foodOrder",
  initialState: { modalState: false },
  reducers: {
    changeState: (state, action) => {
      state.modalState = action.payload;
    },
  },
});

export const { changeState } = foodOrderSlice.actions;

export default foodOrderSlice.reducer;
