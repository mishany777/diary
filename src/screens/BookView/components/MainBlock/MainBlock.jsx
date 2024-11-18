import { useEffect, useState } from 'react';
import styles from '../MainBlock/MainBlock.module.css'
import Note from '../Note/Note';

export default function MainBlock(props) {

    const stars = Math.floor(props.book.rating);
    return (
    <div className={styles.container}>
        <div className={styles.bookInfo + " " + styles.container_wrap}>
            <h1 className={styles.title}>{props.book.title}</h1>
            <h1 className={styles.author}>{props.book.author}</h1>
            <div className={styles.ratings}>
                <div className={styles.ratingArea}>
                    {stars ? (Array(5).fill(1).map((_, i) => (<label
                    htmlFor="star-5"
                    title="Оценка «5»"
                    className={styles.starLabel + " " + `${i < stars ? `${styles.rategood}` : ""}` }
                    ></label>))) : ""}
                </div>
                <div className={styles.pagesDiv}><p>{props.book.pages} страниц</p></div>
            </div>          
        </div>
        
        <div className={styles.retelling + " " + styles.container_wrap}>
            <p className={styles.retelling_text}>{props.book.retelling}</p>
        </div>
        {props.notes.length > 0 ?
        <>
            <p className={styles.notes}>Заметки читателя</p>
            {
            props.notes.map(note => (
                <Note note={note}></Note>))
            }
        </> : ""
        }
      </div>
      );
}