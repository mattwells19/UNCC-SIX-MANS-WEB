import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";
import styles from "./IconButton.module.scss";

type IIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IIconButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={classNames(styles.iconButton, className)} {...props}>
      {children}
    </button>
  );
};

export default IconButton;