import SocialLink from "./SocialLink";
import styles from "../styles/modules/SocialContainer.module.css";
import github from "../public/images/social/github.svg";
import dribbble from "../public/images/social/dribbble.svg";
import linkedin from "../public/images/social/linkedin.svg";

const SocialLinks = [
  {
    id: 12,
    key: "github",
    href: "https://github.com/maximilianhagerf",
    alt: "test",
    icon: github,
  },
  {
    id: 11,
    key: "dribbble",
    href: "https://dribbble.com/captain_green",
    alt: "test",
    icon: dribbble,
  },
  {
    id: 10,
    key: "linkedin",
    href: "https://www.linkedin.com/in/maximilianhagerf/",
    alt: "test",
    icon: linkedin,
  },
];

const SocialContainer = () => {
  return (
    <div className={styles.SocialContainer}>
      {SocialLinks.map(({ id, key, href, alt, icon }) => (
        <SocialLink id={id} key={key} href={href} alt={alt} icon={icon} />
      ))}
    </div>
  );
};

export default SocialContainer;
