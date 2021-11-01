import { forwardRef } from "react";
import { Player } from "../../async/fetchLeaderboard";
import Th from "./components/Th";
import useTableSort from "../../hooks/useTableSort";
import styles from "./PlayerTable.module.scss";

export type RowData = Omit<Player, "mmr"> & {
  mmr: number | null;
};

interface IPlayerTableProps {
  tableData: Array<RowData>;
  enableSort?: boolean;
}

const PlayerTable = forwardRef<HTMLTableElement, IPlayerTableProps>(({ tableData, enableSort = false }, ref) => {
  const hasMmr = tableData.length > 0 ? Boolean(tableData[0].mmr) : true;

  const { currentSort, handleHeaderClick, sortedData } = useTableSort<RowData>(tableData, {
    column: "rank",
    direction: "ascending",
  });

  const commonThProps = {
    currentSort: currentSort,
    enableSort: enableSort,
    onHeaderClick: handleHeaderClick,
  };

  return (
    <table className={styles.playerTable} ref={ref}>
      <thead>
        <tr>
          <Th
            field="rank"
            align="center"
            {...commonThProps}
          >
            Rank
          </Th>
          <Th
            field="name"
            align="left"
            {...commonThProps}
          >
            Name
          </Th>
          {hasMmr ? (
            <Th
              field="mmr"
              align="center"
              {...commonThProps}
            >
              MMR
            </Th>
          ) : null}
          <Th
            field="wins"
            align="center"
            {...commonThProps}
          >
            Wins
          </Th>
          <Th
            field="losses"
            align="center"
            {...commonThProps}
          >
            Losses
          </Th>
          <Th
            field="matchesPlayed"
            align="center"
            {...commonThProps}
          >
            Matches Played
          </Th>
          <Th
            field="winPerc"
            align="center"
            {...commonThProps}
          >
            Win Perc.
          </Th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((player) => {
          const [playerName, discordIdentifier] = player.name.split("#");

          return (
            <tr key={player.name}>
              <td align="center">{player.rank}</td>
              <td align="left">
                {playerName}
                <span className={styles.mutedText}>#{discordIdentifier}</span>
              </td>
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
