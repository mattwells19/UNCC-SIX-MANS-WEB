import type { NextPage } from "next";
import { useMemo, useState } from "react";
import fetchLeaderboard, { Player } from "../../async/fetchLeaderboard";
import PageHeader from "../../components/PageHeader";
import PlayerTable from "../../components/PlayerTable";
import SearchInput from "../../components/SearchInput";
import styles from "./Leaderboard.module.scss";

interface LeaderboardProps {
  data: Array<Player>;
}

const Leaderboard: NextPage<LeaderboardProps> = ({ data }) => {
  const [search, setSearch] = useState<string>("");
  const filteredData = useMemo(() => (
    data.filter((player) => player.name.toLowerCase().includes(search.toLowerCase()))
  ), [search, data]);

  return (
    <>
      <PageHeader title="Leaderboard" description="The leaderboard for the current six mans season." />
      <section className={styles.leaderboard}>
        <SearchInput
          id="playerSearchField"
          label="Type to search for a player."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.leaderboardTable}>
          <PlayerTable enableSort tableData={filteredData} />
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const data = await fetchLeaderboard();

  return {
    props: data
  };
}

export default Leaderboard;
