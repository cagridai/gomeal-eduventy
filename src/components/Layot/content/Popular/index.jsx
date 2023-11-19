"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./Popular.module.css";
import PopularItem from "@/components/Layot/content/Popular/PopularItem";

export default function Popular() {
  const popularState = useSelector((state) => state.popular);

  const setPopularItems = popularState.map((item) => {
    return (
      <PopularItem
        key={item.id}
        itemName={item.itemName}
        discount={item.discount}
        img={item.image}
        price={item.price}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span>Popular</span>
        <Link href={"#"}>View all &gt;</Link>
      </div>
      <div className={styles.items}>{setPopularItems}</div>
    </div>
  );
}
