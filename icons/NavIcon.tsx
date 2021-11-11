import type { SVGProps } from "react";

const NavIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 8L4 1M1.5 3H9M1 6H8.5M7.5 1L5.5 8" stroke="var(--whiteAlpha-500)" strokeLinecap="round"/>
    </svg>
  );
};

export default NavIcon;


