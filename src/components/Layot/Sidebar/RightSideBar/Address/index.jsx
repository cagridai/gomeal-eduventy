import Location from "/public/icons/icon_location.svg";
import styles from "./Address.module.css";
import CustomButton from "@/components/CustomButton";

export default function Address() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>Your Address</span>
      </div>
      <div className={styles.addressHeading}>
        <Location />
        <span className={styles.addressLocation}>Elm Street, 23</span>
        <CustomButton text={"Change"} href={"#"} style={"addressOrange"} />
      </div>
      <div className={styles.addressOpen}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
      </div>
      <div className={styles.noteButton}>
        <CustomButton text={"Add Note"} href={"#"} style={"addressBlack"} />
      </div>
    </div>
  );
}
