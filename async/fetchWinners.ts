import { Client } from "@notionhq/client";

type Pages = {
  key: string;
  pageId: string;
  seasonEnded: Date;
};

type SeasonWinner = {
  title: number;
  name: string;
  wins: number;
  losses: number;
  matchesPlayed: number;
  winPerc: number;
};

export type Season = {
  semester: string;
  winners: Array<SeasonWinner>;
  seasonEnded: string;
};

function formatSemester(name: string) {
  const yearIndex = name.indexOf("2");
  const semester = name.substring(0, yearIndex);
  const year = name.substring(yearIndex);
  return `${semester} ${year}`;
}

export default async function (): Promise<{ data: Array<Season> }> {
  const client = new Client({ auth: process.env.notion_token });

  const pages: Array<Pages> = await client.databases
    .query({ database_id: process.env.winners_table_id ?? "" })
    .then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return res.results.map(({ properties }: { properties: any }) => ({
        key: properties.Name.rich_text[0].text.content,
        pageId: properties.PageId.rich_text[0].text.content,
        seasonEnded: properties.SeasonEnded.date.start,
      }));
    });

  const seasonWinners: Array<Season> = [];

  for (const page of pages) {
    const data: Array<SeasonWinner> = await client.databases
      .query({ database_id: page.pageId, sorts: [{ direction: "ascending", property: "Title" }] })
      .then((res) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        res.results.map(({ properties }: { properties: any }) => ({
          losses: properties.Losses.number,
          matchesPlayed: properties.MatchesPlayed.formula.number,
          name: properties.Name.rich_text[0].text.content,
          title: properties.Title.title[0].text.content,
          winPerc: properties.WinPerc.formula.number * 100,
          wins: properties.Wins.number,
        })),
      );

    seasonWinners.push({
      seasonEnded: new Date(page.seasonEnded).toLocaleDateString("default", { dateStyle: "medium" }),
      semester: formatSemester(page.key),
      winners: data,
    });
  }

  return { data: seasonWinners };
}
