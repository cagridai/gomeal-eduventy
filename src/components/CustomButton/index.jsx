import Link from "next/link";
import Icon from "@/components/Icons";
import styles from "./CustomButton.module.css";

export default function CustomButton({ href, text, iconName, style }) {
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
    }
  };

  const svgFill = () => {
    switch (style) {
      case "filled":
        return "#fff";
      case "plane":
        return "#A098AE";
      case "settings":
        return "var(--color-primary-black)";
    }
  };

  return (
    <Link href={href} className={btnStyle()}>
      {iconName && <Icon name={iconName} fill={svgFill()} />}
      {text && <span className={btnTextStyle()}>{text}</span>}
    </Link>
  );
}
