import styles from "../AddNote/AddNote.module.css";

export default function AddNote({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>+</p>
    </button>
  );
}
