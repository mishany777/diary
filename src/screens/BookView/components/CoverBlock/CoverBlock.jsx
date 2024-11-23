import styles from '../CoverBlock/CoverBlock.module.css'

export default function CoverBlock() {
    return (
        <div className={styles.coverBlock}>
          <div className={styles.coverForm}></div>
          {/* <button className={styles.saveButton}
          onClick={onClick}>
            <p>Сохранить</p>
          </button> */}
          <div className={styles.buttons}>
            <button className={styles.button + " " + styles.delete}>Delete</button>
            <button className={styles.button + " " + styles.edit}>Edit</button>
          </div>
        </div>
      );
}