import { useEffect, useRef, useState } from "react";
import { Season } from "../async/fetchWinners";
import PlayerTable from "./PlayerTable";
import styles from "./Accordion.module.scss";
import ArrowIcon from "../icons/ArrowIcon";

interface IAccordionProps {
  tableContent: Season;
  defaultExpanded?: boolean;
}

const Accordion = ({ defaultExpanded = false, tableContent }: IAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const [height, setHeight] = useState<number>(0);
  const tableRef = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    if (tableRef.current) {
      setHeight(tableRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <h2 className={styles.accordionHeader}>
        <button aria-expanded={expanded} onClick={() => setExpanded(prev => !prev)}>
          <ArrowIcon width={25} fill="currentColor" transform={`rotate(${expanded ? "0" : "-90"})`} />
          <span>{tableContent.semester}</span>
        </button>
      </h2>
      <div className={styles.accordionContent} style={{ height: expanded ? height : 0 }}>
        <PlayerTable ref={tableRef} tableData={tableContent.winners} />
      </div>
    </div>
  );
};

export default Accordion;