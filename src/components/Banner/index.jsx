import styles from "./Banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerText}>
        <h3>Get Discount Voucher Up To 20% </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div>
        <Image
          src={"/icons/image_woman.png"}
          alt={"woman"}
          width={359}
          height={239}
        />
      </div>
    </div>
  );
}
