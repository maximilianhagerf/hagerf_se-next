import Logo from "./Logo";
import SocialContainer from "./SocialContainer";
import styles from "../styles/modules/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <SocialContainer />
    </div>
  );
};

export default Sidebar;
