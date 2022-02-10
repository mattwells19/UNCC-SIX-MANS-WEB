import { AnchorHTMLAttributes, FC } from "react";
import LinkIcon from "../../icons/LinkIcon";
import { Link } from "remix";

interface IEmbedButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const EmbedButton: FC<IEmbedButtonProps> = ({ href, children, ...props }) => {
  return href.startsWith("/") ? (
    <Link className="embedButton" to={href} {...props}>
      {children}
      <LinkIcon />
    </Link>
  ) : (
    <a className="embedButton" href={href} {...props}>
      {children}
      <LinkIcon />
    </a>
  );
};

export default EmbedButton;
