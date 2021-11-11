import styles from "./Navbar.module.scss";
import NavLink from "../NavLink";
import { useEffect, useState } from "react";
import classNames from "classnames";
import HamburgerIcon from "../../icons/HamburgerIcon";
import CloseIcon from "../../icons/CloseIcon";
import IconButton from "../IconButton";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (window && window.document.body.clientWidth > 1100) {
      setOpen(true);
    }
  }, []);
  
  return (
    <>
      <IconButton className={styles.hambugerMenu} onClick={() => setOpen(true)} title="Open navigation drawer.">
        <HamburgerIcon />
      </IconButton>
      <nav className={classNames(styles.navbar, {[styles.open]: open})}>
        <div className={styles.navHeader}>
          <span>
            UNCC 6 Mans
          </span>
          <IconButton onClick={() => setOpen(false)} title="Close navigation drawer.">
            <CloseIcon />
          </IconButton>
        </div>
        <ul>
          <li>
            <NavLink href="/">
              general
            </NavLink>
          </li>
          <li>
            <NavLink href="/leaderboard">
              leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink href="/winners">
              hall-of-fame
            </NavLink>
          </li>
        </ul>
        <div className={styles.credit}>
          <span>Website made by Matt Wells</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
