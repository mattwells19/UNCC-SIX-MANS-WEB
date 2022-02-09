import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import styles from "~/styles/winners.css";
import Accordion, { links as accordionLinks } from "~/components/Accordion";
import PageHeader, { links as pageHeaderLinks } from "~/components/PageHeader";

export const links: LinksFunction = () => {
  return [...pageHeaderLinks(), ...accordionLinks(), { rel: "stylesheet", href: styles }];
};

interface WinnerPlayer {
  Name: string;
  Wins: number;
  Losses: number;
}

export const loader: LoaderFunction = async (): Promise<[string, Array<WinnerPlayer>][]> => {
  const dataBaseUrl = "https://uncc-six-mans.s3.amazonaws.com/winners";
  const winnerFiles = ["summer2020", "fall2020", "spring2021", "summer2021", "fall2021"];

  const winners = new Map<string, Array<WinnerPlayer>>();
  for (const seasonKey of winnerFiles) {
    const fetchUrl = `${dataBaseUrl}/${seasonKey}.json`;
    const seasonWinners = await fetch(fetchUrl).then((res) => res.json());
    winners.set(seasonKey, seasonWinners);
  }
  return Array.from(winners);
};

function formatSemester(name: string) {
  const yearIndex = name.indexOf("2");
  const semester = name[0].toUpperCase() + name.substring(1, yearIndex);
  const year = name.substring(yearIndex);
  return `${semester} ${year}`;
}

function Winners() {
  const winnerMap = useLoaderData<[string, Array<WinnerPlayer>][]>();

  return (
    <>
      <PageHeader title="Hall of Fame" description="Top 5 players from previous Six Man seasons." />
      <section className="winnerAccordions">
        {winnerMap.map(([season, winners], index) => (
          <Accordion header={formatSemester(season)} key={season} defaultExpanded={index === 0}>
            <ul style={{ margin: 0 }}>
              {winners.map((winner, index) => (
                <li key={`${season}-${winner.Name}`}>
                  {index + 1}
                  {winner.Name}
                  {winner.Wins}
                  {winner.Losses}
                  {winner.Wins + winner.Losses}
                  {winner.Wins / (winner.Wins + winner.Losses)}
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </section>
    </>
  );
}

export default Winners;
