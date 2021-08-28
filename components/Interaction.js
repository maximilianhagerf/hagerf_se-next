import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/modules/Welcome.module.css";

const mainDelay = 2.5;

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

function Interaction() {
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
          custom={[0, 0.2, "easeInOut"]}
          d="M0.5,21.284c0.754-0.638,1.508-1.334,2.262-2.03c1.624-1.508,3.248-2.899,4.35-3.712
	c1.102-0.812,1.102-0.812,0.87,0.29c-0.116,0.639-0.406,1.393-0.754,2.32c-0.986,2.842-2.378,6.728,0.696,7.25
	c2.9,0.464,8.41-4.118,12.296-7.598c-0.928,2.436-1.218,5.394,1.044,6.495c1.957,1.094,6.139-0.726,8.697-2.964
	c0.062-0.023,0.123-0.055,0.177-0.109c1.334-1.16,2.784-2.494,3.886-3.538c-0.696,2.668-1.392,6.611,0.986,7.54
	c2.204,0.754,5.742-1.856,8.12-4.002"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0.2, 0.2, "easeInOut"]}
          d="M37.358,9.142c-1.102,0.58-2.146,1.375-0.58,1.665c1.639,0.08,2.596-0.687,2.115-1.507
	c-0.441-0.75-1.5-0.823-3.066-0.476"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0.4, 0.2, "easeInOut"]}
          d="M46.494,19.254c0,2.784-4.06,9.454-5.104,10.672"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0.6, 0.2, "easeInOut"]}
          d="M77.175,21.284c0.754-0.638,1.508-1.334,2.262-2.03c1.624-1.508,3.248-2.899,4.35-3.712
	c1.102-0.812,1.102-0.812,0.87,0.29c-0.116,0.639-0.406,1.393-0.754,2.32c-0.986,2.842-2.378,6.728,0.696,7.25
	c2.9,0.464,8.41-4.118,12.296-7.598c-0.928,2.436-1.218,5.394,1.044,6.495c1.937,1.083,6.054-0.691,8.618-2.898
	c0.07-0.02,0.138-0.057,0.198-0.118c2.494-2.204,6.496-6.09,8.236-6.09c0.464,0,1.334,1.276,2.494,3.074l0.87,1.334l0.696,1.044
	c1.914,2.668,4.466,5.394,7.481,5.277c3.538-0.116,6.786-2.494,9.164-4.64"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[0.8, 0.2, "easeInOut"]}
          d="M105.769,32.013c2.03-4.466,7.714-7.945,13.282-11.367l0.986-0.639c5.278-3.247,10.266-6.438,11.658-10.323"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1, 0.2, "easeInOut"]}
          d="M181.399,24.763c-1.682,0.639-3.364,0.522-5.104-0.174l-1.044-0.521c-3.828-2.146-7.018-7.019-7.481-12.76
	V9.974c0-1.683,0.232-3.48,0.754-5.278c1.682-5.394,6.959-5.567,5.8-0.638c-0.58,2.726-3.422,4.233-6.554,5.916l-1.16,0.638
	c-2.61,1.392-5.278,2.9-6.844,5.278c-4.002,6.321-0.29,13.688,9.105,12.47c2.668-0.349,4.93-1.45,6.554-2.9l0.87-0.87
	c1.914-2.088,2.842-4.756,2.726-7.075l-0.232-1.16c-0.232-0.928-0.754-1.856-1.508-2.494c-3.19-2.9-6.786-0.464-4.292,1.682
	c1.16,0.986,2.9,1.624,4.872,1.856l1.16,0.116c3.538,0.29,7.482-0.696,8.7-2.843 M167.77,11.308"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[1.2, 1, "easeInOut"]}
          d="
	 M212.371,21.226c1.334-1.16,2.784-2.494,3.886-3.538c-3.608,14.671,9.225,4.614,13.514-0.986c-0.804,2.452-1.585,5.401-2.494,7.714
	c-0.406,1.218-0.522,3.19,1.74,1.044c3.289-3.218,14.336-13.936,12.006-8.874c-3.803,9.591,2.187,11.146,9.048,4.64
	c5.094-3.784,10.339-11.931,13.755-17.776c-4.34,7.004-4.543,8.116-4.741,8.774c-3.871,13.209-1.696,16.445,8.559,9.176
	c20.812-10.372,1.321-18.26-1.218-1.16c0.478,13.974,20.829,2.209,22.388-8.062c-0.516-7.725-6.768-0.622-0.812,2.842
	c0.739,0.508,1.986,1.197,2.146,1.74c0.775,2.267-1.673,7.274,1.566,8.468c1.791,0.66,5.866-1.185,6.758-3.736
	c1.846-3.7,7.645-7.258,9.876-6.171c-3.629-1.114-9.247,3.841-10.849,8.043c-1.288,3.953,1.86,4.974,4.663,2.165
	c2.583-2.199,6.29-7.018,8.744-8.866c0.963-0.62,0.09,2.246-0.02,3.2c-1.823,7.751,2.191,7.743,7.901,2.581
	c1.442-6.688,10.329-10.391,10.611-7.114c-0.651-3.706-9.976,1.468-10.67,7.522c-1.05,7.231,9.22,8.357,19.897-2.108
	c5.168-3.893,10.278-12.446,13.464-18.369c-9.833,15.576-10.456,33.161,7.076,15.312c-2.404,8.037,0.429,11.14,6.58,5.752
	c0,0,0.978-0.709,1.176-1.531c0.84-3.484,7.971-8.273,11.352-8.273c-3.384-0.026-10.587,4.882-11.354,8.276
	c-0.051,0.158-0.197,1.464-0.197,1.464c-0.04,2.379,0.512,3.305,2.74,4.07c6.831,2.213,12.949-11.827,6.587-14.391
	c-0.942-0.199-2.459,0.633-1.318,1.85"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[2.2, 0.2, "easeInOut"]}
          d="M386.369,21.284c1.392-1.16,2.783-2.726,3.943-4.002c0.174-0.174,0.348-0.406,0.522-0.58l-0.754,2.378
	c-0.522,1.798-1.103,3.712-1.74,5.336c-0.406,1.218-0.522,3.19,1.74,1.044c4.291-4.06,10.556-10.439,12.47-10.266
	c0.115,0,0,0.29-0.465,1.392c-0.231,0.696-0.638,1.624-0.869,2.668c-0.58,2.61-0.406,5.452,1.855,5.975
	c2.146,0.405,5.626-1.799,8.004-3.944"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[2.4, 0.2, "easeInOut"]}
          d="M219.577,8.698c-1.102,0.58-2.392,1.798-0.826,2.088c1.566,0.349,2.61-0.58,2.61-1.392
	c0-0.87-0.87-1.45-2.436-1.103c-0.116,0.059-0.29,0.232-0.348,0.406"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[2.6, 0.2, "easeInOut"]}
          d="M362.487,8.698c-1.103,0.58-2.393,1.798-0.826,2.088c1.565,0.349,2.609-0.58,2.609-1.392
	c0-0.87-0.869-1.45-2.436-1.103c-0.116,0.059-0.29,0.232-0.348,0.406"
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[2.8, 0.2, "easeInOut"]}
          d="M249.839,8.467c7.489-1.54,25.514-6.203,29.637-3.017 "
          className={styles.FullstackLine}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          custom={[3, 0.2, "easeInOut"]}
          d="M337.823,8.467c7.49-1.54,25.515-6.203,29.638-3.017"
          className={styles.FullstackLine}
        />
      </svg>
    </div>
  );
}

export default Interaction;
