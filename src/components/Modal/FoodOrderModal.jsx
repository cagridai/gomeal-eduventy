import { useDispatch, useSelector } from "react-redux";
import { changeState } from "@/redux/slices/foodOrderSlice";
import { useEffect, useRef } from "react";
import Address from "@/components/Layout/Sidebar/RightSideBar/Address";
import Balance from "@/components/Layout/Sidebar/RightSideBar/Balance";
import OrderMenu from "@/components/Layout/Sidebar/RightSideBar/OrderMenu";
import Profile from "@/components/Layout/Sidebar/RightSideBar/Profile";
import styles from "./FoodOrderModal.module.css";
export default function FoodOrderModal() {
  const dispatch = useDispatch();
  const foodOrderState = useSelector((state) => state.foodOrder);
  let foodOrderRef = useRef({});

  useEffect(() => {
    const handler = (e) => {
      if (foodOrderRef.current && !foodOrderRef.current.contains(e.target)) {
        dispatch(changeState(!foodOrderState.modalState));
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={foodOrderRef}>
        <div className={styles.leftSide}>
          <Profile />
          <OrderMenu />
        </div>
        <div className={styles.rightSide}>
          <Balance />
          <Address />
        </div>
      </div>
    </div>
  );
}
