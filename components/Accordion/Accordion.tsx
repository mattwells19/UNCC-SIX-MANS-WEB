import { useRef, useState } from "react";
import { Season } from "../../async/fetchWinners";
import PlayerTable from "../PlayerTable";
import styles from "./Accordion.module.scss";
import ArrowIcon from "../../icons/ArrowIcon";
import useBoundingBox from "../../hooks/useRect";

interface IAccordionProps {
  tableContent: Season;
  defaultExpanded?: boolean;
}

const Accordion = ({ defaultExpanded = false, tableContent }: IAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const tableRef = useRef<HTMLTableElement | null>(null);
  const rect = useBoundingBox(tableRef);

  return (
    <div>
      <h2 className={styles.accordionHeader}>
        <button aria-expanded={expanded} onClick={() => setExpanded(prev => !prev)}>
          <ArrowIcon width={25} fill="currentColor" transform={`rotate(${expanded ? "0" : "-90"})`} />
          <span>{tableContent.semester}</span>
          <span className={styles.seasonEnded}>Season Ended: <wbr />{tableContent.seasonEnded}</span>
        </button>
      </h2>
      <div
        className={styles.accordionContent}
        style={expanded ? { height: rect.height + 5, overflow: undefined } : { height: 0, overflow: "hidden" }}
      >
        <PlayerTable ref={tableRef} tableData={tableContent.winners} />
      </div>
    </div>
  );
};

export default Accordion;