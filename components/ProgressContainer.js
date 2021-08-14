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

  const onClick = () => {
    if (currentPrecent === 100) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div className={styles.ProgressContainer} onClick={onClick}>
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
            fill:
              currentPrecent === 100
                ? "rgba(255, 255, 255, 1)"
                : // ? "rgba(252, 211, 77, 1)"
                  "rgba(10, 10, 10, .8)",
          }}
          strokeWidth="2"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          className={styles.ProgressBar}
          style={{
            pathLength,
          }}
        />
        {/* <path
          mask="url(#myMask)"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        /> */}
        {/* <mask id="myMask"> */}
        <motion.path
          animate={{
            stroke: currentPrecent === 100 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
          }}
          stroke-linecap="round"
          className={styles.Arrow}
          d=" M 1,9 L 9,1 L 18,9"
        />
        {/* </mask> */}
      </motion.svg>
    </motion.div>
  );
};

export default ProgressContainer;
