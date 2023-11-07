"use client";
import { usePathname } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import styles from "./LeftSideBar.module.css";

export default function LeftSideBar() {
  const pathname = usePathname();
  return (
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
            iconText={"home"}
            style={pathname === "/" ? "filled" : "plane"}
          />
          <CustomButton
            text={"Food Order"}
            href={"/foodorder"}
            iconText={"foodorder"}
            style={pathname === "/foodorder" ? "filled" : "plane"}
          />
          <CustomButton
            text={"Favorite"}
            href={"/favorites"}
            iconText={"favorites"}
            style={pathname === "/favorites" ? "filled" : "plane"}
          />
          <CustomButton
            text={"Order History"}
            href={"/orderhistory"}
            iconText={"orderhistory"}
            style={pathname === "/orderhistory" ? "filled" : "plane"}
          />
          <CustomButton
            text={"Settings"}
            href={"/settings"}
            iconText={"settings"}
            style={pathname === "/settings" ? "filled" : "plane"}
          />
        </div>
      </div>
    </div>
  );
}
