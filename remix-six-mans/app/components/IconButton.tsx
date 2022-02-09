import { ButtonHTMLAttributes, forwardRef } from "react";
import { LinksFunction } from "remix";
import styles from "~/styles/iconButton.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type IIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button ref={ref} className={`iconButton ${className}`} {...props}>
      {children}
    </button>
  );
});

export default IconButton;
