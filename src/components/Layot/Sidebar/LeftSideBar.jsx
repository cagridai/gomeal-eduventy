import styles from "./LeftSideBar.module.css";
import CustomButton from "@/components/CustomButton";

export default function LeftSideBar() {
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
            href={"#"}
            iconText={"home"}
            style={"filled"}
          />
          <CustomButton
            text={"Food Order"}
            href={"#"}
            iconText={"foodorder"}
            style={"plane"}
          />
          <CustomButton
            text={"Favorite"}
            href={"#"}
            iconText={"favorites"}
            style={"plane"}
          />
          <CustomButton
            text={"Order History"}
            href={"#"}
            iconText={"orderhistory"}
            style={"plane"}
          />
          <CustomButton
            text={"Settings"}
            href={"#"}
            iconText={"settings"}
            style={"plane"}
          />
        </div>
      </div>
    </div>
  );
}
