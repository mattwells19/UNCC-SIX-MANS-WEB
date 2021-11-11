import { FC } from "react";
import { NavbarProvider } from "../../contexts/NavBarContext";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <NavbarProvider>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </NavbarProvider>
  );
};

export default Layout;
