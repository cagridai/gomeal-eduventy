"use client";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { changeState } from "@/redux/slices/foodOrderSlice";
import CustomButton from "@/components/CustomButton";
import FoodOrderModal from "@/components/Modal/FoodOrderModal";
import styles from "./LeftSideBar.module.css";

export default function Index() {
  const pathname = usePathname();

  const dispatch = useDispatch();
  const foodOrderState = useSelector((state) => state.foodOrder);

  return (
    <>
      {foodOrderState.modalState && <FoodOrderModal />}
      <div className={styles.container}>
        <div className={styles.sidebarMenu}>
          <div className={styles.goMealText}>
            <span>GoMeal</span>
            <span>.</span>
          </div>
          <div className={styles.buttons}>
            <CustomButton
              text={"Home"}
              href={"/"}
              iconName={"home"}
              style={
                pathname === "/" && !foodOrderState.modalState
                  ? "filled"
                  : "plane"
              }
            />
            <CustomButton
              text={"Food Order"}
              href={"#"}
              iconName={"foodorder"}
              style={foodOrderState.modalState ? "filled" : "plane"}
              onClick={() => {
                dispatch(changeState(!foodOrderState.modalState));
              }}
            />
            <CustomButton
              text={"Favorite"}
              href={"/favorites"}
              iconName={"favorites"}
              style={pathname === "/favorites" ? "filled" : "plane"}
            />
            <CustomButton
              text={"Order History"}
              href={"/orderhistory"}
              iconName={"orderhistory"}
              style={pathname === "/orderhistory" ? "filled" : "plane"}
            />
            <CustomButton
              text={"Settings"}
              href={"/settings"}
              iconName={"settings"}
              style={pathname === "/settings" ? "filled" : "plane"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
