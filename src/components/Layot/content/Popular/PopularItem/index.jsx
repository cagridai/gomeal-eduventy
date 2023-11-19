"use client";
import { useState } from "react";
import Hearth from "../../../../../../public/assets/icons/icon_love.svg";
import Star from "../../../../../../public/assets/icons/icon_star.svg";
import styles from "./PopularItem.module.css";
import CustomButton from "@/components/CustomButton";
export default function PopularItem({ img, itemName, discount, price }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.liked}>
        {discount && <span className={styles.discount}>{discount}% Off</span>}
        <Hearth
          onClick={() => setFavorite(!favorite)}
          className={styles.hearth}
        />
      </div>
      <div className={styles.foodImage}>
        <img src={img} alt={"Food Photo"} />
      </div>
      <div className={styles.rating}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className={styles.itemMap}>
        <div className={styles.itemDescription}>
          <span>{itemName}</span>
          <span>
            $<span className={styles.itemPrice}>{price}</span>
          </span>
        </div>
        <div className={styles.addButton}>
          <CustomButton style={"add"} href={"#"} />
        </div>
      </div>
    </div>
  );
}
