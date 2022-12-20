import styles from "./mainContent.module.scss";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import avatar from "~/image/avatar.jpg";

const cx = classNames.bind(styles);
function MainContent() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("information")}>
        <div className={cx("info__content")}>
          <h2 className={cx("info__content-name")}>Dương Hoàng Hiệp</h2>
        </div>
        <div className={cx("info__avatar")}>
          <Image className="info__avatar-current" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
