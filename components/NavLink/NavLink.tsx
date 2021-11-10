import { FC } from "react";
import NavIcon from "../../icons/NavIcon";
import Link from "next/link";
import styles from "./NavLink.module.scss";

interface NavLinkProps {
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <a className={styles.content}>
        <NavIcon color="var(--whiteAlpha-500)" width="1rem" />
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
