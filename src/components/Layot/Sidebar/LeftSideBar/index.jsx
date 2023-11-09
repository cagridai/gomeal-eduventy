"use client";
import { usePathname } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import styles from "./LeftSideBar.module.css";

export default function Index() {
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
            iconName={"home"}
            style={pathname === "/" ? "filled" : "plane"}
          />
          <CustomButton
            text={"Food Order"}
            href={"/foodorder"}
            iconName={"foodorder"}
            style={pathname === "/foodorder" ? "filled" : "plane"}
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
  );
}
