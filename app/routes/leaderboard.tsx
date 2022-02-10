import { useState, useMemo } from "react";
import { LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import PageHeader, { links as pageHeaderLinks } from "~/components/PageHeader";
import PlayerTable, { links as playerTableLinks, Player } from "~/components/PlayerTable/PlayerTable";
import SearchInput, { links as searchInputLinks } from "~/components/SearchInput";
import styles from "~/styles/leaderboard.css";

export const links: LinksFunction = () => {
  return [...playerTableLinks(), ...pageHeaderLinks(), ...searchInputLinks(), { rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return { title: "Leaderboard | Six Mans | Niner Esports RL" };
};

interface LeaderboardData {
  Name: string;
  Wins: number;
  Losses: number;
  MMR: number;
}

export const loader: LoaderFunction = async (): Promise<Array<Player>> => {
  const leaderboardUrl = "https://uncc-six-mans.s3.amazonaws.com/Leaderboard.json";
  const leaderboardData: Array<LeaderboardData> = await fetch(leaderboardUrl).then((res) => res.json());
  const calculatedRanks: Array<Player> = leaderboardData.map((player, index) => ({
    rank: index + 1,
    name: player.Name,
    mmr: player.MMR ?? null,
    wins: player.Wins,
    losses: player.Losses,
    matchesPlayed: player.Wins + player.Losses,
    winPerc: Math.round((player.Wins / (player.Wins + player.Losses)) * 100),
  }));
  return calculatedRanks;
};

const Leaderboard = () => {
  const players = useLoaderData<Array<Player>>();
  const [search, setSearch] = useState<string>("");

  const filteredData = useMemo(
    () => players.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())),
    [search, players],
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
