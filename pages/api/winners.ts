// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
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

type Season = {
  semester: string;
  winners: Array<SeasonWinner>;
  seasonEnded: string;
};

export type WinnersResponse = Record<string, Season>;

function formatSemester(name: string) {
  const yearIndex = name.indexOf("2");
  const semester = name.substring(0, yearIndex);
  const year = name.substring(yearIndex);
  return `${semester} ${year}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<WinnersResponse>) {
  const client = new Client({ auth: process.env.notion_token });

  const pages: Array<Pages> = await client.databases
    .query({ database_id: "d189056a327146e19e930a41e2ce08d2" })
    .then((res) => {
      return res.results.map(({ properties }) => ({
        key: properties.Name.rich_text[0].text.content,
        pageId: properties.PageId.rich_text[0].text.content,
        seasonEnded: properties.SeasonEnded.date.start,
      }));
    });

  const seasonWinners: WinnersResponse = {};

  for (const page of pages) {
    const data: Array<SeasonWinner> = await client.databases
      .query({ database_id: page.pageId, sorts: [{ direction: "ascending", property: "Title" }] })
      .then((res) =>
        res.results.map(({ properties }) => ({
          losses: properties.Losses.number,
          matchesPlayed: properties.MatchesPlayed.formula.number,
          name: properties.Name.rich_text[0].text.content,
          title: properties.Title.title[0].text.content,
          winPerc: properties.WinPerc.formula.number * 100,
          wins: properties.Wins.number,
        })),
      );

    seasonWinners[page.key] = {
      seasonEnded: new Date(page.seasonEnded).toLocaleDateString("default", { dateStyle: "medium" }),
      semester: formatSemester(page.key),
      winners: data,
    };
  }

  res.status(200).json(seasonWinners);
}
