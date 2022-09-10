import { AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import SocialContainer from "../components/SocialContainer";
import MailButton from "../components/MailButton";
import styles from "../styles/modules/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Logo />
      <AnimatePresence
        mode="wait"
        // initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {children}
      </AnimatePresence>
      <Navigation />
      <MailButton />
      <SocialContainer />
    </div>
  );
};

export default Layout;
