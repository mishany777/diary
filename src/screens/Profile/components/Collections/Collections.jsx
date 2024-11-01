import styles from "../Collections/Collections.module.css";
import CollectionItem from "../CollectionItem/CollectionItem";
export default function Collections() {
  return (
    <div className={styles.collectionDiv}>
      <div className={styles.nav}>
        <p>Коллекции</p>
        <a href="#">все коллекции...</a>
      </div>

      <div className={styles.list}>
        <ul className={styles.collectionBlock}>
          <CollectionItem title="книги" count="5"></CollectionItem>
          <CollectionItem title="фиги" count="52"></CollectionItem>
          <CollectionItem title="вижу" count="52"></CollectionItem>
        </ul>
      </div>
    </div>
  );
}
