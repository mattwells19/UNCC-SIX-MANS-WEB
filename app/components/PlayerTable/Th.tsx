import { DetailedHTMLProps, ThHTMLAttributes, FC } from "react";
import { ITableSort } from "../../hooks/useTableSort";
import { AscendingIcon, DescendingIcon, UnsortedIcon } from "../../icons/table";
import { Player } from "./PlayerTable";

export interface ThProps extends DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  field: keyof Player;
  enableSort: boolean;
  currentSort: ITableSort<Player> | null;
  onHeaderClick: (clickedHeader: keyof Player) => void;
}

const Th: FC<ThProps> = ({ enableSort, field, children, currentSort, onHeaderClick, ...props }) => {
  const sortDirection = currentSort && currentSort.column === field ? currentSort.direction : undefined;

  return (
    <th data-sortable={enableSort ? true : undefined} aria-sort={sortDirection} {...props}>
      {enableSort ? (
        <button onClick={() => onHeaderClick(field)}>
          {children}
          {sortDirection ? (
            sortDirection === "ascending" ? (
              <AscendingIcon height="1.2rem" />
            ) : (
              <DescendingIcon height="1.2rem" />
            )
          ) : (
            <UnsortedIcon height="1.2rem" />
          )}
        </button>
      ) : (
        children
      )}
    </th>
  );
};

export default Th;
