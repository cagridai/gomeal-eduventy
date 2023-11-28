"use client";
import { useSelector } from "react-redux";
import RecentOrderedItem from "./RecentOrderedItem";
import Link from "next/link";
import styles from "./RecentOrder.module.css";

export default function RecentOrder() {
  const recentState = useSelector((state) => state.recent);

  const setRecentItems = recentState.map((item) => {
    return (
      <RecentOrderedItem
        key={`recent_ordered_item_ + ${item.id}`}
        itemName={item.itemName}
        price={item.price}
        img={item.image}
        deliveredTime={item.deliveredTime}
        distance={item.distance}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span>Recent Order</span>
        <Link href={"#"}>View all &gt;</Link>
      </div>
      <div className={styles.recentOrderedItems}>{setRecentItems}</div>
    </div>
  );
}
