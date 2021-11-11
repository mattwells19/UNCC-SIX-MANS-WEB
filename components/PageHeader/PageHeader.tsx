import styles from "./PageHeader.module.scss";
import Head from "next/head";
import IconButton from "../IconButton";
import HamburgerIcon from "../../icons/HamburgerIcon";
import { useNavbar } from "../../contexts/NavBarContext";
import NavIcon from "../../icons/NavIcon";

interface IPageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: IPageHeaderProps) => {
  const { setOpen } = useNavbar();

  return (
    <>
      <Head>
        <title>{title} | Six Mans | UNCC Rocket League Esports</title>
      </Head>

      <header className={styles.header}>
        <IconButton className={styles.hambugerMenu} onClick={() => setOpen(true)} title="Open navigation drawer.">
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
    </>
  );
};

export default PageHeader;