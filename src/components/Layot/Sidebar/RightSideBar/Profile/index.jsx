import styles from "./Profile.module.css";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.btn}>
        <CustomButton
          href={"#"}
          iconName={"notifications"}
          style={"settings"}
        />
        <CustomButton href={"#"} iconName={"settings"} style={"settings"} />
      </div>
      <div className={styles.image}>
        <Image
          src={"/icons/image_man.jpg"}
          alt={"Index photo"}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
