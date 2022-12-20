import MainContent from "./components/mainContent";
import SideBar from "./components/sideBar";
import styles from "./defaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default DefaultLayout;
