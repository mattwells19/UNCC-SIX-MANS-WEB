import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import fetchLeaderboard, { Player } from "../../async/fetchLeaderboard";
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
    <div>
      <Head>
        <title>Leaderboard | Six Mans | UNCC Rocket League Esports</title>
      </Head>

      <main>
        <h1>Leaderboard</h1>
        <p>The leaderboard for the current six mans season.</p>
        <hr />
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
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetchLeaderboard();

  return {
    props: data
  };
}

export default Leaderboard;
