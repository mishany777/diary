import styles from "../CollectionItem/CollectionItem.module.css";
export default function CollectionItem(props) {
  return (
    <li className={styles.item}>
      <div className={styles.image}></div>

      <div className={styles.name}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.count}>{props.count} книг</p>
      </div>
    </li>
  );
}
