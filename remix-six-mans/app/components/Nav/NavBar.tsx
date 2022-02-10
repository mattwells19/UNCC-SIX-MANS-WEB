import { useEffect, useRef } from "react";
import styles from "~/styles/navbar.css";
import lgStyles from "~/styles/large/navbar.css";
import NavLink from "./NavLink";
import CloseIcon from "../../icons/CloseIcon";
import IconButton from "../IconButton";
import { Link, LinksFunction } from "remix";
import { useNavbar } from "~/contexts/NavbarContext";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: lgStyles, media: "(max-width: 1200px)" },
  ];
};

const NavBar = () => {
  const { open, setOpen } = useNavbar();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (closeBtnRef.current && open) {
      closeBtnRef.current.focus();
    }
  }, [open]);

  return (
    <aside className={`navbar ${open ? "open" : ""}`}>
      <div>
        <div className="navHeader">
          <Link to="/general">
            <h1>
              <img src="/SixMansLogo.png" width="30" alt="Six Mans logo" />
              UNCC 6 Mans
            </h1>
          </Link>
          <IconButton ref={closeBtnRef} onClick={() => setOpen(false)} title="Close navigation drawer.">
            <CloseIcon />
          </IconButton>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink href="/general">general</NavLink>
            </li>
            <li>
              <NavLink href="/leaderboard">leaderboard</NavLink>
            </li>
            <li>
              <NavLink href="/winners">hall-of-fame</NavLink>
            </li>
          </ul>
        </nav>
        <span className="credit">Website made by Matt Wells</span>
      </div>
    </aside>
  );
};

export default NavBar;
