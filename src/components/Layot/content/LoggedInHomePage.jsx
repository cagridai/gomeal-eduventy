import SearchBar from "@/components/SearchBar";
import styles from "./LoggedInHomePage.module.css";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
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
