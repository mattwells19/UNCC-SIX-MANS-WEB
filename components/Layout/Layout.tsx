import { FC } from "react";
import { NavbarProvider } from "../../contexts/NavbarContext";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <NavbarProvider>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </NavbarProvider>
    </div>
  );
};

export default Layout;
