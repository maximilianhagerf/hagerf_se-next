import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/modules/Navigation.module.css";

const variants = {
  hidden: {
    x: 100,
    scale: 0.75,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    scale: 0.75,

    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const NavigationToggle = ({ toggleMenu, isHome, showMenu }) => {
  const controls = useAnimation();
  const router = useRouter();
  const styleHide = isHome ? styles.ToggleHide : "";
  const menuActive = showMenu ? styles.MenuActive : "";

  useEffect(() => {
    if (router.pathname === "/") {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [controls, router]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      onClick={() => toggleMenu()}
      className={`${styles.Toggle} ${menuActive} `}
    >
      <span className={styles.Stroke1} />
      <span className={styles.Stroke2} />
      <span className={styles.Stroke3} />
    </motion.div>
  );
};

export default NavigationToggle;
