import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/modules/MailButton.module.css";

const confirmVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const containerVariants = {
  hidden: {
    display: "flex",
    x: "calc(100% + 3rem)",
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
  visible: {
    display: "flex",
    x: 0,
    transition: {
      delay: 1.8,
      duration: 0.5,
    },
  },
};

async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

const MailButton = () => {
  const controls = useAnimation();
  const [isCopied, setIsCopied] = useState(false);

  const mainControls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      mainControls.start("hidden");
    } else {
      mainControls.start("visible");
    }
    if (isCopied) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [mainControls, router, controls, isCopied]);

  const onClick = () => {
    copyTextToClipboard("maximilian.hagerf@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <motion.div
      initial="hidden"
      animate={mainControls}
      exit="hidden"
      variants={containerVariants}
      className={styles.MailButtonContainer}
    >
      <div className={styles.MailButton} onClick={onClick}>
        <motion.span
          initial="hidden"
          animate={controls}
          variants={confirmVariants}
          className={styles.Confirm}
        >
          Copied!
        </motion.span>
        <span className={styles.Text}>
          maximilian.hagerf@gmail.com
          <i className={styles.TextInside}>CLICK TO COPY</i>
        </span>
        <span className={styles.IconContainer}>
          <i className={styles.Icon}>
            <svg
              className={styles.Svg}
              xmlns="http://www.w3.org/2000/svg"
              width="36.295"
              height="19.281"
              viewBox="0 0 50 20"
            >
              <g
                id="Vector_Smart_Object"
                data-name="Vector Smart Object"
                transform="translate(6 -0.86) scale(1 )"
              >
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M3.439,2.532,1.6,1.61V19.39H36.4V1.61L19,10.349Z"
                  fill="none"
                  stroke="#f5df4d"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="34.796"
                  transform="translate(1.602 1.61)"
                  fill="none"
                  stroke="#f5df4d"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </i>
        </span>
      </div>
    </motion.div>
  );
};

export default MailButton;
