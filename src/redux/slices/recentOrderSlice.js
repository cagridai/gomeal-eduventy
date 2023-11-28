import { createSlice } from "@reduxjs/toolkit";

const recentOrderSlice = createSlice({
  name: "recent",
  initialState: [
    {
      id: 1,
      itemName: "Pizza",
      image: "/temporary/pizza2-2021-08-26-17-02-26-utc.png",
      price: 5.59,
      distance: 4.67,
      deliveredTime: 21,
    },
    {
      id: 2,
      itemName: "Ramen",
      image: "/temporary/ramen-2021-10-21-04-01-53-utc 1.png",
      price: 5.59,
      distance: 4.67,
      deliveredTime: 21,
    },
    {
      id: 3,
      itemName: "Fried Rice",
      image: "/temporary/fried-rice.png",
      price: 5.59,
      distance: 4.67,
      deliveredTime: 21,
    },
  ],
  reducers: {},
});

export const {} = recentOrderSlice.actions;

export default recentOrderSlice.reducer;
