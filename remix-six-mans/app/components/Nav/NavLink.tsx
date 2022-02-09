import { FC } from "react";
import { Link, useLocation } from "remix";
import NavIcon from "../../icons/NavIcon";

interface NavLinkProps {
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const { pathname } = useLocation();

  return (
    <Link to={href} className={`navLink ${pathname === href ? "active" : ""}`}>
      <NavIcon width="1.2rem" height="1.2rem" />
      {children}
    </Link>
  );
};

export default NavLink;
