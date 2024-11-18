import styles from "../BooksList/BooksList.module.css";
import BookItem from "../BookItem/BookItem";

import { useEffect, useState } from "react";

import api from '../../../../api'


export default function BooksList(props) {
  return (
    <div className={styles.list}>
      <ul className={styles.booksBlock}>
      {props.books.map(book => (
        <BookItem tags={book.collections} title={book.title} author={book.author} uuid={book.book_id}></BookItem>
        ))}
      </ul>
    </div>
  );
}
