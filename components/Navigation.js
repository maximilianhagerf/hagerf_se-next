import { useEffect, useState } from "react";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { isActiveLink } from "../lib/utils";
import Link, { LinkProps } from "next/link";
import ProgressContainer from "../components/ProgressContainer";
import NavigationToggle from "../components/NavigationToggle";
import { getBreakpointValue } from "../lib/breakpoint.js";
import { useWindowDimensions } from "../lib/useWindowDimension.js";
import styles from "../styles/modules/Navigation.module.css";
// import { variants } from "../tailwind.config";

const breakpoint = getBreakpointValue("sm");

const links = [
  {
    id: 11,
    name: "HOME",
    href: "/",
  },
  {
    id: 10,
    name: "ABOUT",
    href: "/about",
  },
  {
    id: 9,
    name: "WORK",
    href: "/work",
  },
];

const variants = {
  hidden: (custom) => ({
    x: 100,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
  visible: (custom) => ({
    x: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
    },
  }),
};

const variantsIndicator = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function NavItem(props) {
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [controls, router]);

  const isActive = isActiveLink(props.href, props.pathname);

  if (isActive) {
    return (
      <motion.div
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={variants}
        custom={props.id}
      >
        <Link key={props.name} href={props.href} scroll={false}>
          <a className={`${styles.Link} ${styles.IsActive}`}>
            <motion.div
              layoutId="navigation-underline"
              className={styles.NavUnderline}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variantsIndicator}
            />
            {props.name}
          </a>
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      custom={props.id}
    >
      <Link key={props.name} href={props.href} scroll={false}>
        <a className={styles.Link}>{props.name}</a>
      </Link>
    </motion.div>
  );
}

const Navigation = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const [isPhone, setIsPhone] = useState(undefined);
  const [isHome, setIsHome] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const completedClass = showMenu ? styles.NavigationShow : "";

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (width <= breakpoint) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }

    if (router.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [width, setIsPhone, setIsHome, router]);

  if (isPhone) {
    return (
      <>
        <NavigationToggle
          toggleMenu={toggleMenu}
          isHome={isHome}
          showMenu={showMenu}
        />
        <AnimateSharedLayout>
          <nav
            className={`${styles.Navigation} ${completedClass}`}
            onClick={() => toggleMenu()}
          >
            {links.map(({ id, name, href }) => (
              <NavItem
                id={id}
                key={name}
                href={href}
                name={name}
                pathname={router.pathname}
              />
            ))}
          </nav>
        </AnimateSharedLayout>
      </>
    );
  } else {
    return (
      <>
        <AnimateSharedLayout>
          <nav
            className={`${styles.Navigation} ${completedClass}`}
            onClick={() => toggleMenu()}
          >
            {links.map(({ id, name, href }) => (
              <NavItem
                id={id}
                key={name}
                href={href}
                name={name}
                pathname={router.pathname}
              />
            ))}
          </nav>
        </AnimateSharedLayout>
        <ProgressContainer />
      </>
    );
  }
};

export default Navigation;
