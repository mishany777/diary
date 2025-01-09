import styles from '../CoverBlock/CoverBlock.module.css'
import book_photo from "../../../../assets/book_fill.jpg"
import api from "../../../../api"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../AuthContext';
import { useState } from 'react';
import { use } from "react";


export default function CoverBlock(props) {

  const navigate = useNavigate();

  const { user } = useAuth();
  const [confirmation, setConfirmation] = useState(false);


  const deleteBook = async () => {
    await api.delete(`/books/${props.book.book_id}/delete`)
    .then(res => {
      navigate("/mybooks");
    })
    .catch(err => { alert(err) });
  }

    return (
        <div className={styles.coverBlock}>
          <div className={styles.coverForm}>
            <img src={book_photo} alt="Книга" className={styles.img_photo}></img>
          </div>

          {props.book.username === user.username && !confirmation ? 
            <div className={styles.buttons}>
              <button className={styles.button + " " + styles.delete} onClick={() => {setConfirmation(true)}}>Удалить</button>           
            </div> : ""}
            
          {confirmation ?
            <div className={styles.confirmation}>
              <p className={styles.conf_text}>Вы уверены, что хотите <b>удалить</b> эту книгу?</p>
              <div className={styles.buttons}>
                <button className={styles.button + " " + styles.delete} onClick={deleteBook}>Да</button>
                <button className={styles.button + " " + styles.cancel} onClick={() => {setConfirmation(false)}}>Отмена</button>
              </div>
            </div> : ""}
        </div>
      );
}
