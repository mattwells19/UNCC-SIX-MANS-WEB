import type { SVGProps } from "react";

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* eslint-disable-next-line max-len */}
      <path d="M6.53515 9.6332L2.8164 5.91445C2.55937 5.65742 2.55937 5.2418 2.8164 4.9875L3.43437 4.36953C3.6914 4.1125 4.10702 4.1125 4.36132 4.36953L6.99726 7.00547L9.63319 4.36953C9.89023 4.1125 10.3059 4.1125 10.5601 4.36953L11.1836 4.98477C11.4406 5.2418 11.4406 5.65742 11.1836 5.91172L7.46483 9.63047C7.2078 9.89023 6.79218 9.89024 6.53515 9.6332Z" />
    </svg>
  );
};

export default ArrowIcon;
