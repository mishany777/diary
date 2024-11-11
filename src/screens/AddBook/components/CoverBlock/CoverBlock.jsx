import styles from "../CoverBlock/CoverBlock.module.css";

export default function CoverBlock() {
  return (
    <div className={styles.coverBlock}>
      <div className={styles.coverForm}></div>
      <button className={styles.saveButton}>
        <p>Сохранить</p>
      </button>
    </div>
  );
}