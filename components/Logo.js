import Image from "next/image";
import logo from "../public/images/Logo.svg";
import styles from "../styles/modules/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Image src={logo} alt="Logotype" />
    </div>
  );
};

export default Logo;
