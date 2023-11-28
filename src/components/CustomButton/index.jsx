import Link from "next/link";
import Icon from "@/components/Icons";
import styles from "./CustomButton.module.css";

export default function CustomButton({ href, text, iconName, style, onClick }) {
  const btnStyle = () => {
    switch (style) {
      case "filled":
        return styles.buttonFilled;
      case "plane":
        return styles.buttonPlane;
      case "settings":
        return "";
      case "addressOrange":
        return styles.addressOrange;
      case "addressBlack":
        return styles.addressBlack;
      case "checkout":
        return styles.checkout;
      case "coupon":
        return styles.coupon;
      case "add":
        return styles.plus;
    }
  };

  const btnTextStyle = () => {
    switch (style) {
      case "filled":
        return styles.buttonFilledText;
      case "plane":
        return styles.buttonPlaneText;
      case "addressOrange":
        return styles.addressOrangeText;
      case "addressBlack":
        return styles.addressBlackText;
      case "checkout":
        return styles.checkoutText;
      case "coupon":
        return styles.couponText;
    }
  };

  const svgFill = () => {
    switch (style) {
      case "filled":
        return "var(--color-white)";
      case "plane":
        return "var(--color-gray)";
      case "settings":
        return "var(--color-primary-black)";
    }
  };

  return (
    <Link href={href} className={btnStyle()} onClick={onClick}>
      {iconName && <Icon name={iconName} fill={svgFill()} />}
      {text && <span className={btnTextStyle()}>{text}</span>}
      {style === "coupon" && <span className={styles.arrow}>&gt;</span>}
      {style === "add" && <span className={styles.plusText}>+</span>}
    </Link>
  );
}
