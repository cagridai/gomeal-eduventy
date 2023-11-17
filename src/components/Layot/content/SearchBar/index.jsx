import Magnify from "../../../../../public/assets/icons/icon_magnifier.svg";
import styles from "./SearchBar.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <h2 className={styles.welcome}>Hello, Mahmut</h2>
      <form className={styles.form}>
        <label htmlFor={"search"}>
          <Magnify className={styles.icon} />
        </label>
        <input
          id={"search"}
          type={"search"}
          placeholder={"What do you want to eat today..."}
        />
      </form>
    </div>
  );
}
