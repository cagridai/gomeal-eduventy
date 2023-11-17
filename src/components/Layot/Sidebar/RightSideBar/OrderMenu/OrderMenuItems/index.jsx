"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import styles from "./OrderMenuItems.module.css";

export default function OrderMenuItems() {
  const orderState = useSelector((state) => state.order);

  const items = orderState.map((item) => {
    return (
      <div key={"order_item_" + item.id} className={styles.container}>
        <div>
          <Image src={item.image} alt={"Order photo"} width={80} height={80} />
        </div>
        <div className={styles.itemName}>
          <span>{item.itemName}</span>
          <span>x{item.quantity}</span>
        </div>
        <div className={styles.price}>
          <span>
            +<span className={styles.dollarSign}>$</span>
            {item.price}
          </span>
        </div>
      </div>
    );
  });

  return <div>{items}</div>;
}
