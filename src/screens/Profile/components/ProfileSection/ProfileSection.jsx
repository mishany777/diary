import styles from "../ProfileSection/ProfileSection.module.css";
export default function ProfileSection({ children }) {
  return <div className={styles.section}>{children}</div>;
}
