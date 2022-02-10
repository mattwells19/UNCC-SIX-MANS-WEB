import { AnchorHTMLAttributes, FC } from "react";
import LinkIcon from "../../icons/LinkIcon";
import { Link } from "remix";

interface IEmbedButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const EmbedTitle: FC<IEmbedButtonProps> = ({ href, children, ...props }) => {
  return (
    <Link className="embedButton" to={href} {...props}>
      {children}
      <LinkIcon />
    </Link>
  );
};

export default EmbedTitle;
