import { FC, useRef } from "react";
import useBoundingBox from "~/hooks/useRect";
import { useAccordion } from "./Accordion";

const AccordionContent: FC = ({ children }) => {
  const { expanded } = useAccordion();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const rect = useBoundingBox(contentRef);

  return (
    <div
      className="accordionContent"
      style={expanded ? { height: rect.height + 5, overflow: undefined } : { height: 0, overflow: "hidden" }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default AccordionContent;
