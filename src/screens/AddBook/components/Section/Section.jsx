import styles from "../Section/Section.module.css";

export default function Section({ children }) {
  return <div className={styles.background}>{children}</div>;
}
