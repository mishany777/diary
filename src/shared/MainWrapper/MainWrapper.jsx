import styles from "../MainWrapper/MainWrapper.module.css";

function MainWrapper({ children }) {
  const a = 5;
  return <div className={styles.div}>{children}</div>;
}

export default MainWrapper;
