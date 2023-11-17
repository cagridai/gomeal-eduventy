import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./slices/orderSlice";
import PopularSlice from "./slices/popularSlice";

export const store = configureStore({
  reducer: {
    order: OrderSlice,
    popular: PopularSlice,
  },
});
