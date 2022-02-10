import { LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import styles from "~/styles/winners.css";
import { Accordion, AccordionContent, AccordionHeader, accordionLinks } from "~/components/Accordion";
import PageHeader, { links as pageHeaderLinks } from "~/components/PageHeader";
import PlayerTable, { Player, links as playerTableLinks } from "~/components/PlayerTable/PlayerTable";

export const links: LinksFunction = () => {
  return [...playerTableLinks(), ...pageHeaderLinks(), ...accordionLinks(), { rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return { title: "Hall of Fame | Six Mans | UNCC Rocket League Esports" };
};

interface WinnerPlayer {
  Name: string;
  Wins: number;
  Losses: number;
  MMR: number | undefined;
}

interface Season {
  season: string;
  fileName: string;
  seasonEnded: string;
}

interface WinnerLoaderResponse {
  seasonWinners: [string, Array<Player>][];
  seasons: Record<string, Season>;
}

export const loader: LoaderFunction = async (): Promise<WinnerLoaderResponse> => {
  const dataBaseUrl = "https://uncc-six-mans.s3.amazonaws.com/winners";
  const seasons: Array<Season> = await fetch(`${dataBaseUrl}/seasons.json`).then((res) => res.json());

  const winners = new Map<string, Array<Player>>();
  for (const { season, fileName } of seasons) {
    const seasonWinners: Array<WinnerPlayer> = await fetch(`${dataBaseUrl}/${fileName}`).then((res) => res.json());
    const calculatedSeasonWinners: Array<Player> = seasonWinners.map((winner, index) => ({
      rank: index + 1,
      name: winner.Name,
      mmr: winner.MMR ?? null,
      wins: winner.Wins,
      losses: winner.Losses,
      matchesPlayed: winner.Wins + winner.Losses,
      winPerc: winner.Wins / (winner.Wins + winner.Losses),
    }));
    winners.set(season, calculatedSeasonWinners);
  }

  const seasonsRecord: Record<string, Season> = seasons.reduce((acc, season) => {
    return {
      ...acc,
      [season.season]: season,
    };
  }, {});

  return {
    seasonWinners: Array.from(winners),
    seasons: seasonsRecord,
  };
};

function Winners() {
  const { seasonWinners, seasons } = useLoaderData<WinnerLoaderResponse>();

  return (
    <>
      <PageHeader title="Hall of Fame" description="Top 5 players from previous Six Man seasons." />
      <section className="winnerAccordions">
        {seasonWinners.map(([season, winners], index) => (
          <Accordion key={season} defaultExpanded={index === 0}>
            <AccordionHeader>
              <span>{seasons[season].season}</span>
              <span className="seasonEnded">
                Season Ended: <wbr />
                {seasons[season].seasonEnded}
              </span>
            </AccordionHeader>
            <AccordionContent>
              <PlayerTable tableData={winners} />
            </AccordionContent>
          </Accordion>
        ))}
      </section>
    </>
  );
}

export default Winners;
