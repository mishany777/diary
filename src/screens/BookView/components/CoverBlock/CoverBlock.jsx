import styles from '../CoverBlock/CoverBlock.module.css'
import book_photo from "../../../../assets/book_fill.jpg"

export default function CoverBlock() {
    return (
        <div className={styles.coverBlock}>
          <div className={styles.coverForm}>
            <img src={book_photo} alt="Книга" className={styles.img_photo}></img>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button + " " + styles.delete}>Удалить</button>
            <button className={styles.button + " " + styles.edit}>Редактировать</button>
          </div>
        </div>
      );
}