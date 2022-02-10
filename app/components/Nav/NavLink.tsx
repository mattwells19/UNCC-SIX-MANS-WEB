import { FC } from "react";
import { NavLink as RemixNavLink } from "remix";
import NavIcon from "../../icons/NavIcon";

interface NavLinkProps {
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  return (
    <RemixNavLink to={href} className="navLink">
      <NavIcon width="1.2rem" height="1.2rem" />
      {children}
    </RemixNavLink>
  );
};

export default NavLink;
