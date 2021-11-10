import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import NavLink from "../NavLink";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (window && window.document.body.clientWidth > 1100) {
      setOpen(true);
    }
  }, []);
  
  return (
    <>
      <button className={styles.hambugerMenu} onClick={() => setOpen(true)}>
        {/* TODO: Move to component */}
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H21M2 9H21M2 16H21" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </button>
      <nav className={classNames(styles.navbar, {[styles.open]: open})}>
        <div className={styles.navHeader}>
          <span>
            UNCC 6 Mans
          </span>
          <button onClick={() => setOpen(false)}>
            {/* TODO: Move to component */}
            <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.60667 8.19283L8.0802 1.00001" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M1.60667 1L8.08022 8.19281" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <ul>
          <li className={router.route === "/" ? styles.active : undefined}>
            <NavLink href="/">
              general
            </NavLink>
          </li>
          <li className={router.route === "/leaderboard" ? styles.active : undefined}>
            <NavLink href="/leaderboard">
              leaderboard
            </NavLink>
          </li>
          <li className={router.route === "/winners" ? styles.active : undefined}>
            <NavLink href="/winners">
              hall-of-fame
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
