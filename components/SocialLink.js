import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/modules/SocialLink.module.css";

const SocialLink = ({ socialKey, href, alt, icon }) => {
  return (
    <div className={styles.SocialLink}>
      <Link key={socialKey} href={href} passHref={true} target="_blank">
        <a>
          <Image src={icon} alt={alt} className={styles.Icon} />
        </a>
      </Link>
    </div>
  );
};

export default SocialLink;
