import type { NextPage } from "next";
import Head from "next/head";
import fetchWinners, { Season } from "../../async/fetchWinners";
import Accordion from "../../components/Accordion";
import styles from "./Winners.module.scss";

interface WinnersProps {
  data: Array<Season>;
}

const Winners: NextPage<WinnersProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Hall of Fame | Six Mans | UNCC Rocket League Esports</title>
      </Head>

      <h1>Hall of Fame</h1>
      <p>Top 5 players from previous Six Man seasons.</p>
      <hr />
      <section className={styles.winnerAccordions}>
        {data.map((season, index) => (
          <Accordion defaultExpanded={index === 0} key={season.semester} tableContent={season} />
        ))}
      </section>
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
