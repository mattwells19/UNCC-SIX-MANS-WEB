import { FC } from "react";
import styles from "./Embed.module.scss";

interface IEmbedContentProps {
  title: string;
}

const EmbedContent: FC<IEmbedContentProps> = ({ title, children }) => {
  return (
    <div className={styles.embedContent}>
      <h2 className={styles.embedContentTitle}>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default EmbedContent;