import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: [
    {
      id: 1,
      itemName: "Pepperoni Pizza",
      image: "/temporary/pizza-2021-08-26-17-02-26-utc.png",
      price: 5.59,
      quantity: 1,
    },
    {
      id: 2,
      itemName: "Cheese Burger",
      image: "/temporary/burger-2021-08-26-18-18-28-utc 1.png",
      price: 5.59,
      quantity: 1,
    },
    {
      id: 3,
      itemName: "Vegan Pizza",
      image: "/temporary/freshly-baked-pizza-2021-08-27-09-26-24-utc.png",
      price: 5.59,
      quantity: 1,
    },
  ],
  reducers: {},
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
