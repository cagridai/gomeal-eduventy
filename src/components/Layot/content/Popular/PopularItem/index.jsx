"use client";
import { useState } from "react";
import Hearth from "../../../../../../public/assets/icons/icon_love.svg";
import styles from "./PopularItem.module.css";
import CustomButton from "@/components/CustomButton";
export default function PopularItem({ img, itemName, discount, price }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        {discount && <span>{discount}% Off</span>}
        <Hearth onClick={() => setFavorite(!favorite)} />
      </div>
      <div>
        <img src={img} alt={"Food Photo"} />
      </div>
      <div>Rating</div>
      <div>
        <div>
          <span>{itemName}</span>
          <span>
            $<span>{price}</span>
          </span>
        </div>
        <div>
          <CustomButton style={"add"} href={"#"} />
        </div>
      </div>
    </div>
  );
}
