import OrderMenuItems from "./OrderMenuItems";
import OrderMenuCheckout from "./OrderMenuCheckout";
import styles from "./OrderMenu.module.css";

export default function OrderMenu() {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>Order Menu</span>
      <div>
        <OrderMenuItems />
        <OrderMenuCheckout />
      </div>
    </div>
  );
}
