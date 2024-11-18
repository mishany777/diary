import styles from "../BookItem/BookItem.module.css";
import { Link } from "react-router-dom";

export default function BookItem(props) {
  return (
    <li className={styles.item}>
        <div className={styles.image}></div>
        <div className={styles.name}>
        {props.tags && (
            <div className={styles.tag}>
              {props.tags.map((tag) => (
                <p>{tag.title}</p>
              ))}
            </div>
          )}
          <Link to={`/books/${props.uuid}`}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.author}>{props.author}</p>
          </Link>
        </div>
    </li>
  );
}
