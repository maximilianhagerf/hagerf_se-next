import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/modules/SocialLink.module.css";

const SocialLink = ({ id, href, alt, icon }) => {
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [controls, router]);

  const variants = {
    hidden: {
      x: -120,
      transition: {
        delay: id * 0.1,
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      transition: {
        delay: id * 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={styles.SocialLink}
      initial="hidden"
      animate={controls}
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
