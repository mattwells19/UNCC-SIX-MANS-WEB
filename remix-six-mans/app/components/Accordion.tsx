import { FC, useRef, useState } from "react";
import styles from "~/styles/accordion.css";
import ArrowIcon from "../icons/ArrowIcon";
import useBoundingBox from "../hooks/useRect";
import { LinksFunction } from "remix";

interface IAccordionProps {
  header: string;
  defaultExpanded?: boolean;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Accordion: FC<IAccordionProps> = ({ defaultExpanded = false, header, children }) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const rect = useBoundingBox(contentRef);

  return (
    <div>
      <h2 className="accordionHeader">
        <button aria-expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
          <ArrowIcon width={25} fill="currentColor" transform={`rotate(${expanded ? "0" : "-90"})`} />
          <span>{header}</span>
        </button>
      </h2>
      <div
        className="accordionContent"
        style={expanded ? { height: rect.height + 10, overflow: undefined } : { height: 0, overflow: "hidden" }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
