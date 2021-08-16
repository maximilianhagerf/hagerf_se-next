import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/modules/SocialLink.module.css";

const SocialLink = ({ id, href, alt, icon }) => {
  const variants = {
    hidden: {
      y: 200,
      transition: {
        delay: id * 0.2,
        duration: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        delay: id * 0.2,
        duration: 0.5,
      },
    },
  };
  console.log({ id });
  return (
    <motion.div
      className={styles.SocialLink}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      custom={id}
    >
      <Link href={href} passHref={true} target="_blank">
        <a>
          <Image src={icon} alt={alt} className={styles.Icon} />
        </a>
      </Link>
    </motion.div>
  );
};

export default SocialLink;
