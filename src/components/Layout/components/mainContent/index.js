import styles from "./mainContent.module.scss";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import avatar from "~/image/avatar.jpg";
import background from "~/image/graph-dot-top-374458.svg";

const cx = classNames.bind(styles);
function MainContent() {
  return (
    <div
      // style={{
      //   background: `url(${background})`,
      // }}
      className={cx("wrapper")}
    >
      <div className={cx("information")}>
        <div className={cx("info__content")}>
          <div>
            <h2 className={cx("info__content-name")}>Duong Hoang Hiep</h2>
            <p className={cx("info__content-position")}>
              Applied position: Front-End Intern
            </p>
            <p className={cx("info__content-desc")}>
              As a student full of passion, with knowledge gained and actively
              learning about new technologies. I hope to be able to become a
              hard Front-End developer in 6 month and contribute to the
              development of the company.
            </p>
          </div>
        </div>
        <div className={cx("info__avatar")}>
          <Image className="info__avatar-current" src={avatar} alt="avatar" />
        </div>
      </div>
      <div className={cx("info__mySelf")}>
        <div>
          <div className={cx("info__mySelf-wrapper")}>
            <h2 className={cx("info__mySelf-name text-title")}>Name:</h2>
            <p className={cx("info__mySelf-content")}>Duong Hoang Hiep</p>
          </div>
          <div className={cx("info__mySelf-wrapper")}>
            <h2 className={cx("info__mySelf-phone text-title")}>Phone:</h2>
            <p className={cx("info__mySelf-content")}>0396448870</p>
          </div>
          <div className={cx("info__mySelf-wrapper")}>
            <h2 className={cx("info__mySelf-address text-title")}>Address:</h2>
            <p className={cx("info__mySelf-content")}>Ha Noi, Viet Nam</p>
          </div>
        </div>
        <div>
          <div className={cx("info__mySelf-wrapper")}>
            <h2 className={cx("info__mySelf-birth text-title")}>Birth:</h2>
            <p className={cx("info__mySelf-content")}>12/04/2001</p>
          </div>
          <div className={cx("info__mySelf-wrapper")}>
            <h2 className={cx("info__mySelf-mail text-title")}>Email:</h2>
            <p className={cx("info__mySelf-content")}>
              duong.hoanghiepp@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
