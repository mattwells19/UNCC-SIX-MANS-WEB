import { useState, useMemo } from "react";
import { LinksFunction } from "remix";
import PageHeader, { links as pageHeaderLinks } from "~/components/PageHeader";
import PlayerTable from "~/components/PlayerTable/PlayerTable";
import SearchInput, { links as searchInputLinks } from "~/components/SearchInput";
import styles from "~/styles/leaderboard.css";

export const links: LinksFunction = () => {
  return [...pageHeaderLinks(), ...searchInputLinks(), { rel: "stylesheet", href: styles }];
};

const Leaderboard = () => {
  const [search, setSearch] = useState<string>("");
  const filteredData = useMemo(
    () => data.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())),
    [search, data],
  );

  return (
    <>
      <PageHeader title="Leaderboard" description="The leaderboard for the current six mans season." />
      <section className="leaderboard">
        <SearchInput
          id="playerSearchField"
          label="Type to search for a player."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="leaderboardTable">
          <PlayerTable enableSort tableData={filteredData} />
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
