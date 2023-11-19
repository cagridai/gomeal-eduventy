import Category from "src/components/Layot/content/Category";
import Popular from "@/components/Layot/content/Popular";
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

        <div></div>
      </main>
    </div>
  );
}
