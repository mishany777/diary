import { useState } from "react";
import styles from "../AddBlock/AddBlock.module.css";
import BookInfo from "../BookInfo/BookInfo";
import Retelling from "../Retelling/Retelling";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

export default function AddBook() {
  const [notes, setNotes] = useState([<Note key={0} />]);

  const handleAddNote = () => {
    setNotes([...notes, <Note key={notes.length} />]);
  };

  return (
    <div className={styles.container}>
      <BookInfo />
      <Retelling />
      <p className={styles.notes}>
        <b>Заметки:</b> <span>поделитесь своим мнением о прочитанном</span>
      </p>
      {notes}
      <AddNote onClick={handleAddNote} />
    </div>
  );
}
