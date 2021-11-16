import { AnchorHTMLAttributes, FC } from "react";
import Link from "next/link";
import styles from "./Embed.module.scss";
import LinkIcon from "../../icons/LinkIcon";

interface IEmbedButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const EmbedTitle: FC<IEmbedButtonProps> = ({ href, children, ...props }) => {
  return (
    <Link passHref href={href}>
      <a className={styles.embedButton} {...props}>
        {children}
        <LinkIcon />
      </a>
    </Link>
  );
};

export default EmbedTitle;