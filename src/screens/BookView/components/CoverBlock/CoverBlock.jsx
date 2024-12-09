import styles from '../CoverBlock/CoverBlock.module.css'
import book_photo from "../../../../assets/book_fill.jpg"
import api from "../../../../api"
import { useNavigate } from 'react-router-dom'

export default function CoverBlock(props) {

  const navigate = useNavigate();

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
            <button className={styles.button + " " + styles.delete} onClick={deleteBook}>Удалить</button>
            <button className={styles.button + " " + styles.edit}>Редактировать</button>
          </div>
        </div>
      );
}