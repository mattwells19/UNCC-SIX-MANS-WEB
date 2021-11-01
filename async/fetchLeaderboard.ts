import { Client } from "@notionhq/client";

export type Player = {
  rank: number;
  mmr: number;
  name: string;
  wins: number;
  losses: number;
  matchesPlayed: number;
  winPerc: number;
};

export default async function (): Promise<{ data: Array<Player> }> {
  const client = new Client({ auth: process.env.notion_token });

  const data: Array<Player> = await client.databases
    .query({
      database_id: process.env.leaderboard_table_id ?? "",
      sorts: [
        { direction: "descending", property: "MMR" },
        { direction: "descending", property: "Wins" },
      ],
    })
    .then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return res.results.map(({ properties }: { properties: any }, index) => ({
        losses: properties.Losses.number,
        matchesPlayed: properties.MatchesPlayed.formula.number,
        mmr: properties.MMR.number,
        name: properties.Name.rich_text[0].text.content,
        rank: index + 1,
        winPerc: properties.WinPerc.formula.number * 100,
        wins: properties.Wins.number,
      }));
    });

  return { data };
}
