import Home from "../../../public/assets/icons/icon_home.svg";
import Coupon from "../../../public/assets/icons/icon_coupon.svg";
import Favorites from "../../../public/assets/icons/icon_favorites.svg";
import FoodOrder from "../../../public/assets/icons/icon_foodorder.svg";
import Notification from "../../../public/assets/icons/icon_notifications.svg";
import OrderHistory from "../../../public/assets/icons/icon_orderhistory.svg";
import Settings from "../../../public/assets/icons/icon_settings.svg";

export default function Icon({ name, fill }) {
  switch (name) {
    case "home":
      return <Home style={{ fill: `${fill}` }} />;
    case "coupon":
      return <Coupon style={{ fill: `${fill}` }} />;
    case "favorites":
      return <Favorites style={{ fill: `${fill}` }} />;
    case "foodorder":
      return <FoodOrder style={{ fill: `${fill}` }} />;
    case "notifications":
      return <Notification style={{ fill: `${fill}` }} />;
    case "orderhistory":
      return <OrderHistory style={{ fill: `${fill}` }} />;
    case "settings":
      return <Settings style={{ fill: `${fill}` }} />;
  }
}
