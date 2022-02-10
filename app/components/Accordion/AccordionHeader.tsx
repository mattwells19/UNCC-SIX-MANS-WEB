import { FC } from "react";
import ArrowIcon from "~/icons/ArrowIcon";
import { useAccordion } from "./Accordion";

const AccordionHeader: FC = ({ children }) => {
  const { expanded, setExpanded } = useAccordion();

  return (
    <h2 className="accordionHeader">
      <button aria-expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
        <ArrowIcon width={25} fill="currentColor" transform={`rotate(${expanded ? "0" : "-90"})`} />
        {children}
      </button>
    </h2>
  );
};

export default AccordionHeader;
