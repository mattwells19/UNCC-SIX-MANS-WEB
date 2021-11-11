import { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import styles from "./IconButton.module.scss";

type IIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button ref={ref} className={classNames(styles.iconButton, className)} {...props}>
      {children}
    </button>
  );
});

export default IconButton;