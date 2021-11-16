import type { NextPage } from "next";
import { Embed, EmbedContent, EmbedButton } from "../../components/Embed";
import PageHeader from "../../components/PageHeader";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <PageHeader title="General" description="" />
      <section className={styles.home}>
        <Embed>
          <EmbedContent title="Welcome to UNCC Six Mans!">
            <p>The official Rocket league community at Charlotte.</p>
          </EmbedContent>
        </Embed>
        <Embed>
          <EmbedContent title="I'm Norm!">
            <p>I am a Discord bot that helps organize 6 mans lobbies.</p>
          </EmbedContent>
        </Embed>
        <Embed>
          <EmbedContent title="Six Mans">
            <p>When someone wants to play, they press a button that adds them to the queue.</p>
            <p>
              Once 6 players have joined the queue, I give them the option to either randomize teams or choose the top
              two rated players to be captains.
            </p>
            <p>If captains are chosen, the two captains take turns picking players for their teams.</p>
            <p>Once the teams are set, they play a best-of-five series to determine the winner.</p>
          </EmbedContent>
        </Embed>
        <Embed>
          <EmbedContent title="Keeping Score">
            <p>After the winner is decided, one player from each team reports back to me with the winner.</p>
            <p>
              I then calculate how many points are gained for the winners/lost for the losers and update the leaderboard
              with the updated scores.
            </p>
            <p>
              I keep an updated list in the Discord server, but I always keep an updated leaderboard for the website as
              well.
            </p>
            <p>Check it out by clicking the button below!</p>
          </EmbedContent>
          <EmbedButton href="/leaderboard">
            Leaderboard
          </EmbedButton>
        </Embed>
        <Embed>
          <EmbedContent title="Season Winners">
            <p>
              At the end of each season, the top five on the leaderboard receive prizes and get their own special spot
              in the Hall of Fame.
            </p>
            <p>Check out our Hall of Fame by clicking the button below!</p>
          </EmbedContent>
          <EmbedButton href="/winners">
            Hall of Fame
          </EmbedButton>
        </Embed>
        <Embed>
          <EmbedContent title="My Parents">
            <p>I was developed and am still maintained by students at Charlotte:</p>
            <ul>
              <li>Caleb Smith</li>
              <li>Twan</li>
              <li>Matt Wells (Tux)</li>
              <li>Austin Baker (h)</li>
            </ul>
            <p>My code is open source and you can see it by clicking on the button below.</p>
          </EmbedContent>
          <EmbedButton target="_blank" href="https://github.com/mattwells19/UNCC-Six-Mans.js">
            Github
          </EmbedButton>
        </Embed>
      </section>
    </>
  );
};

export default Home;
