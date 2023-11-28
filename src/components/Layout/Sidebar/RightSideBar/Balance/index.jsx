import styles from "./Balance.module.css";
export default function Balance() {
  return (
    <div className={styles.container}>
      <div className={styles.balanceText}>
        <span>Your Balance</span>
      </div>
      <div className={styles.card}>
        <div className={styles.balance}>
          <span>Balance</span>
          <span>$12.000</span>
        </div>
      </div>
    </div>
  );
}
