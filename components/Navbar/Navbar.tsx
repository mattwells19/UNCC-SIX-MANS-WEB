import { useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./Navbar.module.scss";
import NavLink from "../NavLink";
import CloseIcon from "../../icons/CloseIcon";
import IconButton from "../IconButton";
import { useNavbar } from "../../contexts/NavBarContext";

const Navbar = () => {
  const { open, setOpen } = useNavbar();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (closeBtnRef.current && open) {
      closeBtnRef.current.focus();
    }
  }, [open]);

  return (
    <aside aria-hidden={!open} className={classNames(styles.navbar, {[styles.open]: open})}>
      {open ? (
        <>
          <div className={styles.navHeader}>
            <h1>
              UNCC 6 Mans
            </h1>
            <IconButton ref={closeBtnRef} onClick={() => setOpen(false)} title="Close navigation drawer.">
              <CloseIcon />
            </IconButton>
          </div>
          <nav>
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
          </nav>
          <span className={styles.credit}>Website made by Matt Wells</span>
        </>
      ) : null}
    </aside>
  );
};

export default Navbar;
