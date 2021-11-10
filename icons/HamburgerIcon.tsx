import type { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 2H21M2 9H21M2 16H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default HamburgerIcon;
