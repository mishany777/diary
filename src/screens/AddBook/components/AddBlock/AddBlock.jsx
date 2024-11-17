import { useState } from "react";
import styles from "../AddBlock/AddBlock.module.css";
import BookInfo from "../BookInfo/BookInfo";
import Retelling from "../Retelling/Retelling";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

export default function AddBlock(props) {
  return (
    <div className={styles.container}>
      <BookInfo bookInfo={props.bookInfo} changeBookInfo={props.changeBookInfo}/>
      <Retelling bookInfo={props.bookInfo} changeBookInfo={props.changeBookInfo}/>
      <p className={styles.notes}>
        <b>Заметки:</b> <span>поделитесь своим мнением о прочитанном</span>
      </p>
      {
        props.notes.map((note, index) => {
          return <Note note={note} index={index} change={props.changeNote}></Note>
          })
      }
      <AddNote onClick={props.addNote} />
      <button onClick={() => {
        console.log(props.notes);
        console.log(props.bookInfo);
      }}>adsasd</button>
    </div>
  );
}
