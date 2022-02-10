import { FC } from "react";

interface IEmbedContentProps {
  title: string;
}

const EmbedContent: FC<IEmbedContentProps> = ({ title, children }) => {
  return (
    <div className="embedContent">
      <h2 className="embedContentTitle">{title}</h2>
      {children}
    </div>
  );
};

export default EmbedContent;
