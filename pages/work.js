import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
import { motion } from "framer-motion";
import Content from "../components/Content";
import styles from "../styles/modules/Content.module.css";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
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
          exit="hidden"
          variants={variants}
          className={styles.Header}
        >
          <h1 className={styles.Title}>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
            <span className={styles.Yellow}>Work </span>
            <span className={styles.Purple}>Work </span>
          </h1>
        </motion.header>

        <p className={styles.Paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          venenatis, lacus vitae laoreet commodo, mi felis fermentum mi, vitae
          hendrerit augue arcu ut nibh. Vestibulum vestibulum porta risus, a
          efficitur arcu tristique ut. Aenean at erat sed sem pulvinar pretium.
        </p>
        <p className={styles.Paragraph}>
          vulputate rutrum. In id vehicula eros. Pellentesque sit amet dolor
          ullamcorper, consectetur felis non, auctor ligula. Nam nec suscipit
          ipsum. Integer in nisl vel lacus dictum volutpat. Curabitur vulputate
          mauris sem, vitae pulvinar mi egestas eu. Phasellus tempor vitae felis
          vel laoreet. Duis diam arcu, ullamcorper id leo quis, ultricies
          posuere lorem. Etiam tincidunt at ligula nec tristique. Ut nibh erat,
          tempor vel turpis vitae, ullamcorper pharetra nisi. Mauris eu
          malesuada ante. Duis tincidunt at velit nec accumsan. Pellentesque
          condimentum elementum est, vel blandit dolor placerat vel. Cras eros
          felis, fringilla rutrum elit id, fermentum pretium orci. Duis eget
        </p>
      </Content>
    </>
  );
}
