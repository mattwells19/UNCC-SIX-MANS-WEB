import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";
import styles from "~/styles/accordion.css";
import { LinksFunction } from "remix";

interface AccordionContext {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const AccordionContext = createContext<AccordionContext | null>(null);

export function useAccordion(): AccordionContext {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("You need to use Accordion components as children of an Accordion.");
  }
  return context;
}

interface IAccordionProps {
  defaultExpanded?: boolean;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Accordion: FC<IAccordionProps> = ({ defaultExpanded = false, children }) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
