import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import fetchWinners, { Season } from "../async/fetchWinners";
import { useAsync } from "../hooks/useAsync";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ data: Array<Season> }> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data.map(({ seasonEnded, semester, winners }) => (
          <div>
            <p>{seasonEnded}</p>
            <p>{semester}</p>
            <ul>
              {winners.map((winner) => (
                <li>
                  <p>{winner.title}</p>
                  <p>{winner.name}</p>
                  <p>{winner.wins}</p>
                  <p>{winner.losses}</p>
                  <p>{winner.matchesPlayed}</p>
                  <p>{winner.winPerc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetchWinners();

  return {
    props: data
  };
}

export default Home;
