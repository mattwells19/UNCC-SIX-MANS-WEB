import { FC } from "react";

const Embed: FC = ({ children }) => {
  return (
    <div className="embed">
      <div className="avatar">
        <img src="/norm_still.png" alt="Norm" width="20" />
      </div>
      <div className="embedHead">
        <span className="name">Norm</span>
        <span className="bot">BOT</span>
      </div>
      {children}
    </div>
  );
};

export default Embed;
