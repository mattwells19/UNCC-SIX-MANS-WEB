import { FC } from "react";
import NavIcon from "../../icons/NavIcon";
import Link from "next/link";
import styles from "./NavLink.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

interface NavLinkProps {
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a className={classNames(styles.content, { [styles.active]: router.route === href })}>
        <NavIcon width="1.2rem" height="1.2rem" />
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
