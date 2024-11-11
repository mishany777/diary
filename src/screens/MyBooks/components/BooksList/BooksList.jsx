import styles from "../BooksList/BooksList.module.css";
import BookItem from "../BookItem/BookItem";
import { useEffect, useState } from "react";
import api from '../../../../api'


export default function BooksList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT OF GAYS")
    const username = localStorage.getItem('username');
    api.get(`/books/user/${username}`)
    .then(response => {
      setBooks(response.data);
    })
  }, [])

  return (
    <div className={styles.list}>
      <ul className={styles.booksBlock}>
        {books.map(book => (<BookItem tag={["Отлично", "Классика"]} title={book.title} author={book.author}></BookItem>))}
      </ul>
    </div>
  );
}
