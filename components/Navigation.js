import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { isActiveLink } from "../lib/utils";
import Link, { LinkProps } from "next/link";
import styles from "../styles/modules/Navigation.module.css";

const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
];

function NavItem(props) {
  const isActive = isActiveLink(props.href, props.pathname);

  if (isActive) {
    return (
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
    );
  }
  return (
    <Link key={props.name} href={props.href} scroll={false}>
      <a className={styles.Link}>{props.name}</a>
    </Link>
  );
}

const Navigation = () => {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <nav className={styles.Navigation}>
        {links.map(({ name, href }) => (
          <NavItem href={href} name={name} pathname={router.pathname} />
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;
