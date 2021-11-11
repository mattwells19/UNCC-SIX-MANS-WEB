import type { NextPage } from "next";
import fetchWinners, { Season } from "../../async/fetchWinners";
import Accordion from "../../components/Accordion";
import PageHeader from "../../components/PageHeader";
import styles from "./Winners.module.scss";

interface WinnersProps {
  data: Array<Season>;
}

const Winners: NextPage<WinnersProps> = ({ data }) => {
  return (
    <>
      <PageHeader title="Hall of Fame" description="Top 5 players from previous Six Man seasons." />
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
