import styles from "../CoverBlock/CoverBlock.module.css";

export default function CoverBlock(props) {

  const onClick = () => {
    props.createBook();
  }

  return (
    <div className={styles.coverBlock}>
      <div className={styles.coverForm}></div>
      <button className={styles.saveButton}
      onClick={onClick}>
        <p>Сохранить</p>
      </button>
    </div>
  );
}
