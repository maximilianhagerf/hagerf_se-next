import { AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";

import styles from "../styles/modules/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navigation />

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
