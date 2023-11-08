import Link from "next/link";
import styles from "./Category.module.css";

export default function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span>Category</span>
        <Link href={"#"}>View all &gt;</Link>
      </div>
      <div></div>
    </div>
  );
}
