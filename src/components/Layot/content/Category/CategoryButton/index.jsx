import Link from "next/link";
import Bakery from "../../../../../../public/assets/icons/icon_category_baked.svg";
import Burger from "../../../../../../public/assets/icons/icon_category_burger.svg";
import Beverage from "../../../../../../public/assets/icons/icon_category_coffee.svg";
import Chicken from "../../../../../../public/assets/icons/icon_category_chicken.svg";
import Pizza from "../../../../../../public/assets/icons/icon_category_pizza.svg";
import Seafood from "../../../../../../public/assets/icons/icon_category_fish.svg";
import styles from "./CategoryButton.module.css";

export default function CategoryButton({ image }) {
  const categoryButtonContentImage = () => {
    switch (image) {
      case "bakery":
        return <Bakery />;
      case "burger":
        return <Burger />;
      case "beverage":
        return <Beverage />;
      case "chicken":
        return <Chicken />;
      case "pizza":
        return <Pizza />;
      case "seafood":
        return <Seafood />;
    }
  };

  const categoryButtonContentText = () => {
    switch (image) {
      case "bakery":
        return "Bakery";
      case "burger":
        return "Burger";
      case "beverage":
        return "Beverage";
      case "chicken":
        return "Chicken";
      case "pizza":
        return "Pizza";
      case "seafood":
        return "Seafood";
    }
  };

  return (
    <Link href={"#"} className={styles.container}>
      <div>{categoryButtonContentImage()}</div>
      <span>{categoryButtonContentText()}</span>
    </Link>
  );
}
