import type { NextPage } from "next";
import Head from "next/head";
import fetchWinners, { Season } from "../async/fetchWinners";
import Accordion from "../components/Accordion";

const Winners: NextPage<{ data: Array<Season> }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Six Mans - Winners | UNCC Rocket League Esports</title>
      </Head>

      <main>
        <h1>Hall of Fame</h1>
        <p>Top 5 players from previous Six Man seasons.</p>
        <hr />
        {data.map((season, index) => (
          <Accordion defaultExpanded={index === 0} key={season.semester} tableContent={season} />
        ))}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const data = await fetchWinners();

  return {
    props: data,
  };
}

export default Winners;
