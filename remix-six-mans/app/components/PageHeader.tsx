import styles from "~/styles/page-header.css";
import mdStyles from "~/styles/medium/page-header.css";
import lgStyles from "~/styles/large/page-header.css";
import IconButton, { links as iconBtnLinks } from "./IconButton";
import HamburgerIcon from "../icons/HamburgerIcon";
import NavIcon from "../icons/NavIcon";
import { LinksFunction } from "remix";
import { useNavbar } from "~/contexts/NavbarContext";

interface IPageHeaderProps {
  title: string;
  description: string;
}

export const links: LinksFunction = () => {
  return [
    ...iconBtnLinks(),
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: mdStyles, media: "(max-width: 600px)" },
    { rel: "stylesheet", href: lgStyles, media: "(max-width: 1200px)" },
  ];
};

const PageHeader = ({ title, description }: IPageHeaderProps) => {
  const { setOpen } = useNavbar();

  return (
    <header className="header">
      <IconButton className="hamburgerMenu" onClick={() => setOpen(true)} title="Open navigation drawer.">
        <HamburgerIcon />
      </IconButton>
      <div>
        <h1>
          <NavIcon width="1.5rem" height="1.5rem" />
          {title.toLowerCase().split(" ").join("-")}
        </h1>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default PageHeader;
