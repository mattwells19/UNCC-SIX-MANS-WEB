import { DetailedHTMLProps, FC, forwardRef, ThHTMLAttributes } from "react";
import { Player } from "../../async/fetchLeaderboard";
import useTableSort from "../../hooks/useTableSort";
import styles from "./PlayerTable.module.scss";

type RowData = Omit<Player, "mmr"> & {
  mmr: number | null;
}

interface IPlayerTableProps {
  tableData: Array<RowData>;
  enableSort?: boolean;
}

interface ThProps extends DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  field: keyof RowData;
}

const PlayerTable = forwardRef<HTMLTableElement, IPlayerTableProps>(({ tableData, enableSort = false }, ref) => {
  const hasMmr = tableData.length > 0 ? Boolean(tableData[0].mmr) : true;
  
  const { currentSort, handleHeaderClick, sortedData } = useTableSort<RowData>(tableData);

  const Th: FC<ThProps> = ({ field, children, ...props }) => {
    const sortDirection = currentSort && currentSort.column === field ? currentSort.direction : undefined;

    return (
      // FIXME - loses focus on click
      <th aria-sort={sortDirection} {...props}>
        {enableSort ? <button onClick={() => handleHeaderClick(field)}>
          {children}
          {sortDirection ? 
            sortDirection === "ascending"
              ? " ▲"
              : " ▼"
            : ""
          }
        </button> : children}
      </th>
    );
  };

  return (
    <table className={styles.playerTable} ref={ref}>
      <thead>
        <tr>
          <Th field="rank" align="center">Rank</Th>
          <Th field="name" align="left">Name</Th>
          {hasMmr ? <Th field="mmr" align="center">MMR</Th> : null}
          <Th field="wins" align="center">Wins</Th>
          <Th field="losses" align="center">Losses</Th>
          <Th field="matchesPlayed" align="center">Matches Played</Th>
          <Th field="winPerc" align="center">Win Perc.</Th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((player) => {
          const [playerName, discordIdentifier] = player.name.split("#");

          return (
            <tr key={player.name}>
              <td align="center">{player.rank}</td>
              <td align="left">{playerName}<span className={styles.mutedText}>#{discordIdentifier}</span></td>
              {hasMmr ? <td align="center">{player.mmr}</td> : null}
              <td align="center">{player.wins}</td>
              <td align="center">{player.losses}</td>
              <td align="center">{player.matchesPlayed}</td>
              <td align="center">{Math.round(player.winPerc)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default PlayerTable;