import styles from "../styles/modules/Content.module.css";

const Content = ({ children }) => {
  return <main className={styles.Main}>{children}</main>;
};

export default Content;
