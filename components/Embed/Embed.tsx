import { FC } from "react";
import Image from "next/image";
import styles from "./Embed.module.scss";
import NormImg from "../../public/norm_still.png";

const Embed: FC = ({ children }) => {
  return (
    <div className={styles.embed}>
      <div className={styles.avatar}>
        <Image priority src={NormImg} alt="Norm" layout="responsive" />
      </div>
      <div className={styles.embedHead}>
        <span className={styles.name}>Norm</span>
        <span className={styles.bot}>BOT</span>
      </div>
      {children}
    </div>
  );
};

export default Embed;