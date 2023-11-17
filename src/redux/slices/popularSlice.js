import { createSlice } from "@reduxjs/toolkit";

const popularSlice = createSlice({
  name: "orders",
  initialState: [
    {
      id: 1,
      itemName: "Fish Burger",
      image: "/temporary/fish-burger-2021-08-29-04-51-34-utc 1.png",
      price: 5.59,
    },
    {
      id: 2,
      itemName: "Beef Burger",
      image: "/temporary/beef-burger-2021-08-27-18-32-01-utc 1.png",
      price: 5.59,
    },
    {
      id: 3,
      itemName: "Cheese Burger",
      image: "/temporary/cheese-burger-2021-08-26-18-18-28-utc 1.png",
      price: 5.59,
    },
  ],
  reducers: {},
});

export const {} = popularSlice.actions;

export default popularSlice.reducer;
