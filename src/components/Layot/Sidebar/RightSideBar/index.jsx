import styles from "./RightSideBar.module.css";
import Profile from "./Profile";
import Balance from "./Balance";
import Address from "./Address";
export default function Index() {
  return (
    <div className={styles.container}>
      <div>
        <Profile />
        <Balance />
        <Address />
      </div>
    </div>
  );
}
