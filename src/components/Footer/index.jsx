import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

export default function Footer() {
  const cx = classNames.bind(styles); // Bind the styles object to classNames
  return <div className={cx("test")}>Footer</div>;
}
