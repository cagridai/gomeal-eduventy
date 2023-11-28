import { useState } from "react";
import Hearth from "../../../../../../public/assets/icons/icon_love.svg";
import styles from "./RecentOrderedItem.module.css";
export default function RecentOrderedItem({
  img,
  itemName,
  price,
  distance,
  deliveredTime,
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={styles.container}>
      <section>
        <Hearth
          onClick={() => setFavorite(!favorite)}
          className={styles.hearth}
        />
      </section>
      <section>
        <img className={styles.itemImage} src={img} alt={"Food Photo"} />
      </section>
      <span className={styles.itemName}>{itemName}</span>
      <span className={styles.dollar}>
        $<span className={styles.itemPrice}>{price}</span>
      </span>
      <span className={styles.distance}>
        {distance} km <span className={styles.dot}>&middot;</span>{" "}
        {deliveredTime} min
      </span>
    </div>
  );
}
