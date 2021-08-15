import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { isActiveLink } from "../lib/utils";
import Link, { LinkProps } from "next/link";
import styles from "../styles/modules/Navigation.module.css";
// import { variants } from "../tailwind.config";

const links = [
  {
    id: 0,
    name: "HOME",
    href: "/",
  },
  {
    id: 1,
    name: "ABOUT",
    href: "/about",
  },
];

const variants = {
  hidden: {
    y: -100,
  },
  visible: (custom) => ({
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
    },
  }),
};

function NavItem(props) {
  const isActive = isActiveLink(props.href, props.pathname);

  if (isActive) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={props.id}
      >
        <Link key={props.name} href={props.href} scroll={false}>
          <a className={`${styles.Link} ${styles.IsActive}`}>
            <motion.div
              layoutId="navigation-underline"
              className={styles.NavUnderline}
              animate
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
      animate="visible"
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
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <nav className={styles.Navigation}>
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
  );
};

export default Navigation;
