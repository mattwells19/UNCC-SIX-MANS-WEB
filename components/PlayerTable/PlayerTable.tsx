import { forwardRef } from "react";
import { Player } from "../../async/fetchLeaderboard";
import styles from "./PlayerTable.module.scss";

type RowData = Omit<Player, "mmr"> & {
  mmr: number | null;
}

interface IPlayerTableProps {
  tableData: Array<RowData>;
}

const PlayerTable = forwardRef<HTMLTableElement, IPlayerTableProps>(({ tableData }, ref) => {
  const hasMmr = tableData.length > 0 ? Boolean(tableData[0].mmr) : true;

  return (
    <table className={styles.playerTable} ref={ref}>
      <thead>
        <tr>
          <th align="center">Rank</th>
          <th align="left">Name</th>
          {hasMmr ? <th align="center">MMR</th> : null}
          <th align="center">Wins</th>
          <th align="center">Losses</th>
          <th align="center">Matches Played</th>
          <th align="center">Win Perc.</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((player, index) => {
          const [playerName, discordIdentifier] = player.name.split("#");

          return (
            <tr key={player.name}>
              <td align="center">{index + 1}</td>
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