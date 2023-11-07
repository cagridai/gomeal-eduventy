import Link from "next/link";
import Icon from "@/components/Icons";
import styles from "./CustomButton.module.css";

export default function CustomButton({ href, text, iconText, style }) {
  const btnStyle = () => {
    switch (style) {
      case "filled":
        return styles.buttonFilled;
      case "plane":
        return styles.buttonPlane;
    }
  };

  const btnTextStyle = () => {
    switch (style) {
      case "filled":
        return styles.buttonFilledText;
      case "plane":
        return styles.buttonPlaneText;
    }
  };

  const svgFill = () => {
    switch (style) {
      case "filled":
        return "#fff";
      case "plane":
        return "#A098AE";
    }
  };

  return (
    <Link href={href} className={btnStyle()}>
      {iconText && <Icon name={iconText} fill={svgFill()} />}
      <span className={btnTextStyle()}>{text}</span>
    </Link>
  );
}
