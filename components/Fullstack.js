import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/modules/Welcome.module.css";

const mainDelay = 0.5;

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
        delay: custom[0] + mainDelay,
      },
      pathLength: {
        duration: custom[1],
        ease: custom[2],
        when: "beforeChildren",
        delay: custom[0] * 1 + mainDelay,
      },
    },
  }),
};

function Fullstack() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.Fullstack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 411.576 100"
        viewBox="0 0 411.576 100"
        className={styles.Svg}
        ref={ref}
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0, 1, "easeInOut"]}
          d="m66.445 24.338m-43.905-23.838c-3.083 8.768-22.93 43.097-19.143 47.792 2.737 1.413 8.345-15.364 6.67-24.243-0.436-5.196-5.513-9.585-9.569-5.8v-9e-3c4.256-2.671 18.239-7.383 22.156-3.123 0.986 1.508-0.232 4.813-1.45 8.177-6.003 14.962 4.592 9.805 11.89 1.856-0.927 2.436-1.276 5.452 1.045 6.554 6.834 2.532 21.886-14.985 25.23-21.228 3.654-6.438-1.334-9.917-7.133-1.16-11.239 16.96-3.615 37.453 14.21 15.023 3.518-4.732 9.58-12.379 8.294-15.602-4.228-2.986-9.362 12.547-9.396 15.021-1.436 10.475 6.099 11.366 12.237 4.872"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1, 0.2, "easeInOut"]}
          d="m100.72 28.688c2.926-2.442 6.445-6.694 8.004-10.324 1.155-2.907-2.291-4.003-2.958-1.044-0.614 6.43 6.282 16.578-4.524 16.181"
          className={styles.FullstackLine}
        />

        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1.2, 0.5, "easeOut"]}
          d="m116.21 28.63c3.306-2.727 6.611-6.438 9.627-10.962 0.858-1.466 3.815-6.389 4.408-7.888 0.754-1.45 0.928-2.088 0.29-2.436-0.829-0.414-1.584 1.793-2.03 2.958-2.001 5.405-8.268 21.063-3.073 22.33 2.577 0.649 4.889-0.872 7.334-3.277 2.109-3.447 6.9-7.683 9.153-6.62-3.308-1.038-9.057 5.082-10.239 9.188-0.574 2.65 1.624 4.336 3.993 2.041 2.682-2.267 6.233-6.967 8.768-8.889 0.928-0.842 0.128 2.329-5e-3 3.169-1.524 6.988 0.833 7.585 5.434 4.122 3.045-2.049 4.978-5.284 7.256-7.74 2.764-2.732 5.671-2.667 5.806-0.958-0.74-2.942-4.891-0.208-6.47 1.675-10.512 11.682 0.605 17.999 15.139 4.288 4.703-4.103 7.945-7.807 11.211-12.54 1.153-1.736 1.996-3.148 2.728-4.883 0.446-1.135 0.752-1.723 0.179-2.057-0.634-0.414-1.218 0.735-1.737 1.764-0.676 1.221-1.728 3.364-2.35 5.022-2.351 5.262-4.556 11.686-5.72 16.35-0.292 2.018 1.136 1.645 2.12 0.386 4.774-5.178 15.36-16.181 17.713-13.772 1.081 1.245-5.457 5.217-9.165 7.194-1.262 0.511-1.708 1.845-0.863 3.501 2.624 5.285 9.034 2.787 13.318-0.967"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1.7, 0.2, "easeInOut"]}
          d="m115.98 15.87c4.06-0.986 7.714-1.74 11.02-2.378l1.74-0.29c7.076-1.219 12.063-1.624 14.848-1.276 1.566 0.232 1.972 0.58 2.03 0.928"
          className={styles.FullstackLine}
        />
      </svg>
    </div>
  );
}

export default Fullstack;
