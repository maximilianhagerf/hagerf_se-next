import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "../styles/modules/ProgressContainer.module.css";

const ProgressContainer = () => {
  const [currentPrecent, setCurrentPercent] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 600,
    damping: 100,
  });

  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );

  return (
    <motion.div className={styles.ProgressContainer}>
      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          animate={{
            fill:
              currentPrecent === 100
                ? "rgba(252, 211, 77, 1)"
                : "rgba(10, 10, 10, .8)",
          }}
          strokeWidth="2"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          className={styles.ProgressBar}
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1,
          }}
        />
      </svg>
    </motion.div>
  );
};

export default ProgressContainer;
