import styles from "../BooksList/BooksList.module.css";
import BookItem from "../BookItem/BookItem";

import { useEffect, useState } from "react";

import api from '../../../../api'


export default function BooksList(props) {

  const [books, setBooks] = useState([]);

  const { username, first_name, last_name, email } = props.profileInfo;

  useEffect(() => {
    if (username){
      api.get(`/books/user/${username}`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        alert(error);
      })
    }
  }, [username])

  return (
    <div className={styles.list}>
      <ul className={styles.booksBlock}>
      {books.map(book => (
        <BookItem tag={["Отлично", "Классика"]} title={book.title} author={book.author}></BookItem>
        ))}
      </ul>
    </div>
  );
}
