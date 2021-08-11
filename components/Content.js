import { motion } from "framer-motion";
import styles from "../styles/modules/Content.module.css";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 300, y: 0 },
};

const Content = ({ children }) => {
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className={styles.Main}
    >
      {children}
    </motion.main>
  );
};

export default Content;
