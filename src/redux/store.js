import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./slices/orderSlice";
import PopularSlice from "./slices/popularSlice";
import RecentOrderSlice from "./slices/recentOrderSlice";
import FoodOrderSlice from "./slices/foodOrderSlice";

export const store = configureStore({
  reducer: {
    order: OrderSlice,
    popular: PopularSlice,
    recent: RecentOrderSlice,
    foodOrder: FoodOrderSlice,
  },
});
