import Link from "next/link";
import Image from "next/image";
import styles from "../styles/modules/SocialLink.module.css";

const SocialLink = ({ key, href, alt, icon }) => {
  return (
    <div className={styles.SocialLink}>
      <Link
        key={key}
        href={href}
        // passHref={true}
        target="_blank"
      >
        <Image src={icon} alt={alt} className={styles.Icon} />
      </Link>
    </div>
  );
};

export default SocialLink;
