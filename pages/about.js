import Head from "next/head";
// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

import Content from "../components/Content";
import Welcome from "../components/Welcome";
import Fullstack from "../components/Fullstack";
import Interaction from "../components/Interaction";

import styles from "../styles/modules/Content.module.css";

import logo1 from "../public/images/work/ba.svg";
import logo2 from "../public/images/work/dino.svg";
import logo3 from "../public/images/work/appeario.png";
import logo4 from "../public/images/work/hysch.svg";

import slide1 from "../public/images/work/img3.jpg";
import slide2 from "../public/images/work/img2.jpg";
import slide3 from "../public/images/work/img1.jpg";
import slide4 from "../public/images/work/img4.jpg";

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
      delayChildren: 0.5,
    },
  },
};

function importAll(r) {
  let cache = {};
  r.keys().forEach((item) => (cache[item.replace("./", "")] = r(item)));
  return cache;
}

const cache = importAll(
  require.context("../public/images/icons", false, /\.(png|jpe?g|svg)$/)
);

// const images = Object.entries(cache).map((module) => module[1].default);

export default function About({ canonical }) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Maximilian Hagerf" />
      </Head>
      <Content>
        <motion.header
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={container}
          className={styles.Header}
        >
          <h1 className={`${styles.Title} ${styles.NoMargin}`}>
            <motion.span
              variants={item}
              className={`${styles.Yellow} ${styles.InlineBlock}`}
            >
              Developer
              <Fullstack />
            </motion.span>
            <motion.span variants={item} className={styles.InlineBlock}>
              {" "}
              &{" "}
            </motion.span>
          </h1>
          <h1 className={`${styles.Title} ${styles.NoMargin}`}>
            <motion.span
              variants={item}
              className={`${styles.Yellow} ${styles.InlineBlock}`}
            >
              Designer
              <Interaction />
            </motion.span>
            <motion.span variants={item} className={styles.InlineBlock}>
              {" "}
              with over a{" "}
            </motion.span>
          </h1>
          <h1 className={`${styles.Title} ${styles.NoMargin}`}>
            <motion.span variants={item} className={styles.Purple}>
              decade
            </motion.span>
            <motion.span variants={item}> of </motion.span>
          </h1>
          <h1 className={`${styles.Title} ${styles.NoMargin}`}>
            <motion.span variants={item}>experience.</motion.span>
            <br />
          </h1>
          <Welcome className={styles.Welcome} />
        </motion.header>
        <h1 className={`${styles.Title} ${styles.Right} ${styles.SmallMargin}`}>
          I build <span className={styles.Yellow}>digital products</span>
        </h1>
        <Carousel
          preventMovementUntilSwipeScrollTolerance={true}
          infiniteLoop={true}
          emulateTouch={true}
          // autoPlay={true}
          // interval={"30000"}
          // showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          useKeyboardArrows={true}
          // renderArrowPrev={false}
          // renderArrowNext={false}
          renderIndicator={false}
          renderThumbs={false}
          interval="500"
          transitionTime="500"
        >
          <div className={styles.ImageOverride}>
            <Image src={slide1} alt="fds" layout="fill" loading="eager" />
          </div>
          <div className={styles.ImageOverride}>
            <Image src={slide2} alt="fds" layout="fill" loading="eager" />
          </div>
          <div className={styles.ImageOverride}>
            <Image src={slide3} alt="fds" layout="fill" loading="eager" />
          </div>
          <div className={styles.ImageOverride}>
            <Image src={slide4} alt="fds" layout="fill" loading="eager" />
          </div>
        </Carousel>
        <h1 className={`${styles.Title} ${styles.SmallMargin}`}>
          I design <span className={styles.Yellow}>logotypes & graphics</span>
        </h1>
        <div className={styles.AboutLogoContainer}>
          <div className="col-span-2">
            <Image src={logo4} alt="fds" loading="eager" />
          </div>
          <div className={styles.AboutLogoContainerInner}>
            <div>
              <Image src={logo1} alt="fds" loading="eager" />
            </div>
            <div>
              <Image src={logo2} alt="fds" loading="eager" />
            </div>
            <div>
              <Image src={logo3} alt="fds" loading="eager" />
            </div>
          </div>
        </div>
        <h1 className={`${styles.Title} ${styles.SmallMargin}`}>
          I have <span className={styles.Yellow}>experience</span> in many
          things
        </h1>
        <ul className={styles.AboutIconList}>
          {/* {images.map(({ image }) => ({ image }))} */}
          {Object.entries(cache).map((module) => {
            const image = module[1].default;
            // const src = image.src.replace("/_next/static/image/public/", "");
            const name = module[0].replace("./", "");
            return (
              <li key={name}>
                <Image src={image} alt={name} loading="eager" />
                {/* <p>{name}</p> */}
              </li>
            );
          })}
        </ul>
        <h1 className={`${styles.Title} ${styles.SmallMargin}`}>
          A little <span className={styles.Yellow}>about</span> me
        </h1>
        <p className={styles.Paragraph}>
          Maximilian is an experienced <strong>designer and developer</strong> -
          a versatile and customer-oriented engineer currently working at{" "}
          <strong>Mektig Technology Group AB</strong>.
        </p>
        <p className={styles.Paragraph}>
          Maximilian has worked with
          <strong> interaction design, UI-UX, graphics and programming </strong>
          since <strong>graduating in 2006</strong>. He has developed solutions
          to interaction technical problems, constructed sketches, detailed
          design and implementations. Maximilian has been responsible for
          developing efficient user interfaces for various products and
          platforms and in a number of different industries.
        </p>
        <p className={styles.Paragraph}>
          Maximilian wants to work and develop as an engineer and designer in a
          creative and versatile environment where he can use his abilities,
          experiences and his mind for details. While he likes to work with the
          latest technologies and principles, he also wants to help
          <strong> improve existing technical solutions </strong> and of course
          realize new and interesting products.
        </p>
        <p className={styles.Paragraph}>
          Maximilian is very<strong> social, open and communicative</strong>.
          Likes to work in groups and also has a good ability to work
          individually. He is easy to express himself, both orally and in
          writing.
        </p>
        <p className={`${styles.Paragraph} ${styles.LastMargin}`}>
          Has since the summer of 2016 lived in Chile and
          <strong> Bolivia</strong> with his
          <strong> wife and two daughters</strong>, 3 and 2 years. They met in
          Sweden in 2012 when she received her doctorate in economics. The
          family will move to Sweden soon.
        </p>
      </Content>
    </>
  );
}
