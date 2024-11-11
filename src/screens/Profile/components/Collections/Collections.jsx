import styles from "../Collections/Collections.module.css";
import CollectionItem from "../CollectionItem/CollectionItem";



export default function Collections(props) {

  const collections = props.collections;

  return (
    <div className={styles.collectionDiv}>
      <div className={styles.nav}>
        <p>Коллекции</p>
        <a href="#">все коллекции...</a>
      </div>

      <div className={styles.list}>
        <ul className={styles.collectionBlock}>
          {collections.map(item => (<CollectionItem title={item.title} count={item.book_count}></CollectionItem>))}
        </ul>
      </div>
    </div>
  );
}
