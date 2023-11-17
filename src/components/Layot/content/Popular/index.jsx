"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./Popular.module.css";

export default function Popular() {
  const popularState = useSelector((state) => state.popular);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span>Popular</span>
        <Link href={"#"}>View all &gt;</Link>
      </div>
    </div>
  );
}
