import Category from "./Category";
import Popular from "./Popular";
import RecentOrder from "./RecentOrder";
import styles from "./LoggedInHomePage.module.css";
export default function LoggedInHomePage() {
  return (
    <div className={styles.container}>
      <main>
        <div>
          <Category />
        </div>

        <div>
          <Popular />
        </div>

        <div>
          <RecentOrder />
        </div>
      </main>
    </div>
  );
}
