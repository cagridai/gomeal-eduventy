import { useDispatch } from "react-redux";
import { changeState } from "@/redux/slices/foodOrderSlice";
import { useEffect, useRef } from "react";
import Address from "@/components/Layout/Sidebar/RightSideBar/Address";
import Balance from "@/components/Layout/Sidebar/RightSideBar/Balance";
import OrderMenu from "@/components/Layout/Sidebar/RightSideBar/OrderMenu";
import Profile from "@/components/Layout/Sidebar/RightSideBar/Profile";
import styles from "./FoodOrderModal.module.css";
export default function FoodOrderModal() {
  const dispatch = useDispatch();
  let foodOrderRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      /*if (!foodOrderRef.current(e.target)) {
        dispatch(changeState(!foodOrderState.modalState));
      }*/
      console.log(foodOrderRef.current.contains("mahmut"));

      /*console.log(e.target);*/
    };
    document.addEventListener("click", handler);
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
