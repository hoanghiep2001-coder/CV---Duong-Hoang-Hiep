import styles from "./sideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBar() {
  return <div className={cx("wrapper")}>SideBar</div>;
}

export default SideBar;
