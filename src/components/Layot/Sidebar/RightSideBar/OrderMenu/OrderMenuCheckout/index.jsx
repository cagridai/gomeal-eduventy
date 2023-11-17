"use client";
import { useSelector } from "react-redux";
import styles from "./OrderMenuCheckout.module.css";
import CustomButton from "@/components/CustomButton";

export default function OrderMenuCheckout() {
  const priceState = useSelector((state) => state.order);

  const totalPrice =
    priceState
      .map((item) => {
        return item.price;
      })
      .reduce((partialSum, a) => partialSum + a, 0) + 1;

  return (
    <div className={styles.container}>
      <div className={styles.service}>
        <span>Service</span>
        <span>
          +<span className={styles.dollar}>$</span>1.00
        </span>
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <span>
          <span className={styles.dollar}>$</span>
          {totalPrice}
        </span>
      </div>
      <CustomButton
        href={"#"}
        text={"Have a coupon code?"}
        style={"coupon"}
        iconName={"coupon"}
      />
      <CustomButton href={"#"} text={"Checkout"} style={"checkout"} />
    </div>
  );
}
