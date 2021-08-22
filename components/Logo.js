import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/modules/Logo.module.css";

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
        duration: 1,
        ease: "easeInOut",
        delay: custom[0] * 1,
      },
    },
  }),
  exit: {
    opacity: 0,
    pathLength: 0,
    transition: {
      opacity: {
        delay: 0.5,
        duration: 0,
      },
      pathLength: {
        duration: 0.5,
      },
    },
  },
};

const Logo = () => {
  const controls = useAnimation();
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (router.pathname === "/" || isHover) {
      controls.start("exit");
    } else {
      controls.start("visible");
    }
  }, [controls, router, isHover]);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.Logo}
    >
      <Link href="/" scroll={false}>
        <a>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 93.9 75.9"
          >
            <motion.g initial="hidden" animate={controls} exit="exit">
              <motion.path
                custom={[0]}
                variants={pathVariants}
                className={styles.Line}
                d="M0.8,59.7c0,0,0-41.6,0-43.5c1.4,0.7,30.8,15.4,30.8,15.4l30.8-15.4l0,43.5"
              />
              <motion.path
                custom={[1]}
                variants={pathVariants}
                className={styles.Line}
                d="M93.2,44.3L62.4,59.7"
              />
              <motion.path
                custom={[1]}
                variants={pathVariants}
                className={styles.Line}
                d="M93.2,0.8L62.4,16.2"
              />
              <motion.path
                custom={[1]}
                variants={pathVariants}
                className={styles.Line}
                d="M31.5,75.2L62.3,59.8"
              />
            </motion.g>
          </svg>
          <motion.span
            className={styles.Home}
            initial={{
              opacity: 0,
              transition: {
                delay: 0.1,
              },
            }}
            animate={{
              opacity: router.pathname === "/" || !isHover ? 0 : 0.2,
              transition: {
                delay: 0.5,
              },
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 315.287 253.748"
              width="30px"
            >
              <g>
                <polygon
                  className={styles.Line}
                  points="293.558,148.638 253.748,148.638 253.748,244.748 61.538,244.748 61.538,148.638 21.728,148.638
		157.638,12.728 	"
                />
              </g>
            </svg>
          </motion.span>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
