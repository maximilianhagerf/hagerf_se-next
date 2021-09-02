import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Content from "../components/Content";

import pdf from "../public/images/work/pdf.svg";
import styles from "../styles/modules/Content.module.css";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 3.5,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    top: 300,
  },
  visible: {
    opacity: 1,
    top: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    top: 300,
    transition: {
      duration: 0.2,
    },
  },
};

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.5,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About({ canonical }) {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Content>
        <motion.header
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={container}
          className={`${styles.Header} ${styles.NoMargin}`}
        >
          <h1 className={`${styles.Title} ${styles.NoMargin}`}>
            <motion.span variants={item} className={styles.Yellow}>
              Work{" "}
            </motion.span>
            <motion.span variants={item} className={styles.Purple}>
              Work{" "}
            </motion.span>
            <motion.span variants={item} className={styles.Yellow}>
              Work{" "}
            </motion.span>
          </h1>
          <h1 className={`${styles.Title} ${styles.NoMargin}`}>
            <motion.span variants={item} className={styles.Purple}>
              Work{" "}
            </motion.span>
            <motion.span variants={item} className={styles.Yellow}>
              Work{" "}
            </motion.span>
            <motion.span variants={item} className={styles.Purple}>
              Work{" "}
            </motion.span>
          </h1>
          <h1 className={`${styles.Title}`}>
            <motion.span variants={item} className={styles.Yellow}>
              Work{" "}
            </motion.span>
            <motion.span variants={item} className={styles.Purple}>
              Work{" "}
            </motion.span>
            <motion.span variants={item} className={styles.Yellow}>
              Work{" "}
            </motion.span>
          </h1>
        </motion.header>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <Link href="../static/Maximilian_Hagerf.pdf">
            <a className={styles.WorkCV} target="_blank">
              <Image src={pdf} alt="fds" loading="eager" />
            </a>
          </Link>
        </motion.div>
      </Content>
    </>
  );
}
