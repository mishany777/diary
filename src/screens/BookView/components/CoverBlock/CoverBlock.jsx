import styles from '../CoverBlock/CoverBlock.module.css'
import book_photo from "../../../../assets/book_fill.jpg"
import api from "../../../../api"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../AuthContext';
import { use } from "react";


export default function CoverBlock(props) {

  const navigate = useNavigate();

  const { user } = useAuth();


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
          <div className={styles.buttons}>
            {props.book.username === user.username ? <button className={styles.button + " " + styles.delete} onClick={deleteBook}>Удалить</button> : ""}
            
            {/* <button className={styles.button + " " + styles.edit}>Редактировать</button> */}
          </div>
        </div>
      );
}