import type { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.60667 8.19283L8.0802 1.00001" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M1.60667 1L8.08022 8.19281" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CloseIcon;
