export { default as Embed } from "./Embed";
export { default as EmbedContent } from "./EmbedContent";
export { default as EmbedButton } from "./EmbedButton";

import { LinksFunction } from "remix";
import styles from "~/styles/embed.css";

export const embedLinks: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
