import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useAnimation,
} from "framer-motion";
import styles from "../styles/modules/ProgressContainer.module.css";

const containerVariants = {
  hidden: {
    x: 120,
    transition: {
      delay: 1.2,
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      delay: 2.4,
      duration: 0.5,
    },
  },
};

const ProgressContainer = () => {
  const controls = useAnimation();
  const router = useRouter();
  const [currentPrecent, setCurrentPercent] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 600,
    damping: 100,
  });

  useEffect(() => {
    if (router.pathname === "/") {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [controls, router]);

  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );

  const onClick = () => {
    if (currentPrecent === 100) {
      setCurrentPercent(0);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={styles.ProgressContainer}
      onClick={onClick}
      initial="hidden"
      animate={controls}
      // animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <motion.svg
        className="progress-icon"
        viewBox="0 0 60 60"
        animate={{
          transitionEnd: {
            style: currentPrecent === 100 ? "cursor:pointer" : "cursor:default",
          },
        }}
      >
        <motion.path
          animate={{
            fill: currentPrecent === 100 ? "rgba(255, 255, 255, 1)" : "#404040",
            transitionEnd: {
              strokeLinecap: currentPrecent < 3 ? "" : "round",
            },
          }}
          transition={{ duration: 0.5 }}
          strokeWidth="2"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          className={styles.ProgressBar}
          style={{
            pathLength,
          }}
        />

        <motion.path
          mask="url(#mask1)"
          animate={{
            stroke: currentPrecent === 100 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
            x: "15px",
            y: currentPrecent === 100 ? "18px" : "50px",
          }}
          stroke-linecap="round"
          className={styles.Arrow}
          d=" M 1,9 L 9,1 L 18,9"
        />
      </motion.svg>
    </motion.div>
  );
};

export default ProgressContainer;
