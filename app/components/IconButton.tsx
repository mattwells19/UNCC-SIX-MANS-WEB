import { ButtonHTMLAttributes, forwardRef } from "react";

type IIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button ref={ref} className={`iconButton ${className}`} {...props}>
      {children}
    </button>
  );
});

export default IconButton;
