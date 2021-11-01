import { useState } from "react";

interface ITableSort<T> {
  column: keyof T;
  direction: "ascending" | "descending";
}

interface IUseTableSort<T> {
  sortedData: Array<T>;
  handleHeaderClick: (clickedHeader: keyof T) => void;
  currentSort: ITableSort<T> | null;
}

export default function useTableSort<T>(data: Array<T>): IUseTableSort<T> {
  const [tableSort, setTableSort] = useState<ITableSort<T> | null>(null);

  function handleHeaderClick(clickedHeader: keyof T) {
    if (tableSort && tableSort.column === clickedHeader) {
      if (tableSort.direction === "ascending") {
        setTableSort({ column: clickedHeader, direction: "descending" });
      } else {
        setTableSort(null);
      }
    } else {
      setTableSort({ column: clickedHeader, direction: "ascending" });
    }
  }

  const sortData = () => {
    if (tableSort) {
      const sortedData = Array.from(data).sort((a, b) => {
        const x = a[tableSort.column];
        const y = b[tableSort.column];

        if (typeof x === "string") {
          return x.localeCompare(y as typeof x);
        } else {
          return +a[tableSort.column] - +b[tableSort.column];
        }
      });
      if (tableSort.direction === "descending") sortedData.reverse();
      return sortedData;
    } else return data;
  };

  return {
    currentSort: tableSort,
    handleHeaderClick,
    sortedData: sortData(),
  };
}
