import { useEffect, useRef } from "react";
import styles from "~/styles/navbar.css";
import NavLink from "./NavLink";
import CloseIcon from "../../icons/CloseIcon";
import IconButton from "../IconButton";
import { LinksFunction } from "remix";
// import { useNavbar } from "../../contexts/NavbarContext";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const NavBar = () => {
  // const { open, setOpen } = useNavbar();
  const open = true;
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
          <h1>UNCC 6 Mans</h1>
          <IconButton ref={closeBtnRef} /*onClick={() => setOpen(false)}*/ title="Close navigation drawer.">
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
