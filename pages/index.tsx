import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UNCC Rocket League Esports</title>
      </Head>
      <nav>
        <ul>
          <li><Link href="/winners">Winners</Link></li>
          <li><Link href="/leaderboard">Leaderboard</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
