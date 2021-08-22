import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/modules/Welcome.module.css";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    pathLength: 1,
    transition: {
      opacity: {
        duration: 0,
        delay: custom[0],
      },
      pathLength: {
        duration: custom[1],
        ease: custom[2],
        when: "beforeChildren",
        delay: custom[0] * 1,
      },
    },
  }),
};

function Welcome() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <div className={styles.Welcome}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 392.8 78"
        viewBox="0 0 392.8 78"
        className={styles.Svg}
        ref={ref}
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0, 0.5, "easeInOut"]}
          d="M.5 28.8c0-10.7 41.6-26.6 48.7-15.6 6.8 11.1-32.9 53.2-27 63 1.2 2 3.6 1.5 7.7-.5 14.7-7.9 43.7-39.2 52.7-43.9.5-.6 1.4.8.5 1v.2c-4.2 6.3-22.8 40.8-5.9 37.9C98 65.3 132 17.8 135.1.5"
          className={styles.Line}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0.7, 0.5, "easeIn"]}
          d="M115.6 53.8c10.5 3.7 34.2-9.2 31.2-18.8-2-3.9-11.1-2-14.2 9.6-.9 2.8-.6 5.3 0 8 8.4 21 45-14 52-24.8 1.7-2 14.4-24 7.1-17.1-10.4 15.7-20.4 61.5 5.5 42.4 1-.7 2-1.4 3.1-2.4 1.4-1.3 3.2-4.7 4-6 6.7-10.6 17-12.8 17.8-6.6m-87.9 12.5"
          className={styles.Line}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1, 1, "easeIn"]}
          d="m222.1 38.1c-1-9.8-19.5 2.1-21.5 15.1-4.3 16.4 21.7 15.1 41-7.2 3.4-5.4 9.3-10 15.4-9.8 0 0 3.3 0.3 2.7-1.1"
          className={styles.Line}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1.9, 1.5, "easeOut"]}
          d="m257 36.3c-10.8-0.9-26.4 18.6-13.5 25.7 10.6 4.7 25.4-17.7 18.1-27.5-5.7-5.6-7.3 2.7 2.9 2.9 27.8-3.2 30-6.6 20.6 21.1 0 0.2 0.7 0 2.7-1.5 12.3-9 26.9-24.6 25.2-3.7 0.2 1.2 1.4 0.7 3.1-0.5 8.1-5.7 20-16.6 23.6-14.6 6.8 2.7-15.8 35.8 17.5 12.8 8.3-5.1 25.3-14.9 21.1-20.7-3.5-5.2-17.7 3.3-18.8 16.5-1 15.9 13.7 20.1 32.8 2.3"
          className={styles.Line}
        />
      </svg>
    </div>
  );
}

export default Welcome;
