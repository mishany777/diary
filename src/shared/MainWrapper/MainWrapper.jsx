import styles from "../MainWrapper/MainWrapper.module.css";

function MainWrapper({ children }) {
  return <div className={styles.div}>{children}</div>;
}

export default MainWrapper;
