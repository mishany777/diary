import styles from "../Note/Note.module.css";

export default function Note() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <textarea
        placeholder="Заметка"
        rows="5"
        cols="30"
        className={styles.input}
      />
    </div>
  );
}
