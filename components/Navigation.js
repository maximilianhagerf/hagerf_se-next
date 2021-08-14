import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { isActiveLink } from "../lib/utils";
// import Link from "./NoScrollLink";
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

const Navigation = () => {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <nav className={styles.Navigation}>
        {links.map(({ name, href }) => (
          <Link key={name} href={href} scroll={false}>
            <a className={styles.Link}>
              {isActiveLink(href, router.pathname) && (
                <motion.div
                  layoutId="navigation-underline"
                  className={styles.NavUnderline}
                  animate
                />
              )}

              {name}
            </a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;
