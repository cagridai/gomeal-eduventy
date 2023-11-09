import SearchBar from "src/components/Layot/content/SearchBar";
import styles from "./LoggedInHomePage.module.css";
import Banner from "src/components/Layot/content/Banner";
import Category from "src/components/Layot/content/Category";
export default function LoggedInHomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <SearchBar />
        </header>

        <div className={styles.banner}>
          <Banner />
        </div>

        <div>
          <Category />
        </div>
      </main>
    </div>
  );
}
