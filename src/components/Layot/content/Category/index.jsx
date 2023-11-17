import Link from "next/link";
import CategoryButton from "./CategoryButton";
import styles from "./Category.module.css";

export default function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span>Category</span>
        <Link href={"#"}>View all &gt;</Link>
      </div>
      <div className={styles.categories}>
        <CategoryButton image={"bakery"} />
        <CategoryButton image={"burger"} />
        <CategoryButton image={"beverage"} />
        <CategoryButton image={"chicken"} />
        <CategoryButton image={"pizza"} />
        <CategoryButton image={"seafood"} />
      </div>
    </div>
  );
}
