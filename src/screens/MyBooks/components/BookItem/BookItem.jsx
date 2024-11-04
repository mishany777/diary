import styles from "../BookItem/BookItem.module.css";

export default function BookItem(props) {
  return (
    <li className={styles.item}>
      <div className={styles.image}></div>

      <div className={styles.name}>
        {props.tag && (
          <div className={styles.tag}>
            {props.tag.map((singleTag, index) => (
              <p key={index}>{singleTag}</p>
            ))}
          </div>
        )}
        <p className={styles.title}>{props.title}</p>
        <p className={styles.author}>{props.author}</p>
      </div>
    </li>
  );
}
