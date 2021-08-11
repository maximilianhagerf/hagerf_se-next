import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import ProgressContainer from "../components/ProgressContainer";
import styles from "../styles/modules/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <Navigation />
      <ProgressContainer />

      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {children}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
