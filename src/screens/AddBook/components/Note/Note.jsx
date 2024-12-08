import styles from "../Note/Note.module.css";

export default function Note(props) {
  const note = props.note;
  const index = props.index;
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <textarea
        placeholder="Заметка"
        rows="5"
        cols="30"
        className={styles.input}
        value={note.text}
        onChange={(e) => { props.change(
          index, {"text": e.target.value, "private": false}
        ) }}
      />
    </div>
  );
}
