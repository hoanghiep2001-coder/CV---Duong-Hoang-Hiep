import styles from "./image.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Image({ className = "", ...props }) {
  return <img className={cx(className)} {...props} />;
}

export default Image;
