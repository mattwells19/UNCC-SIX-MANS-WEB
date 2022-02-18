import IconButton from "./IconButton";
import HamburgerIcon from "../icons/HamburgerIcon";
import NavIcon from "../icons/NavIcon";
import { useNavbar } from "~/contexts/NavbarContext";

interface IPageHeaderProps {
  title: string;
  description: string;
}

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
