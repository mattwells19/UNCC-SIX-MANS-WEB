import { FC } from "react";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
