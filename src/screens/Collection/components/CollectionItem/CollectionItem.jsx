import classes from '../CollectionItem/CollectionItem.module.css'

export default function CollectionItem(props) {

    return (
        <div key={collection.id} className={styles.collectionItem}>
            <div className={styles.collectionInfo}>
                <p>{props.title}</p>
            <div className={styles.inputBlock}>
                <div className={styles.countBlock}>
                <p className={styles.collectionCount}>{props.book_count} книг |</p>
            </div>
            <select
                className={styles.status}
                defaultValue={collection.private}>
                <option value={false}>Публичная</option>
                <option value={true}>Приватная</option>
                </select>
            </div>
            </div>
            <div>
                <button
                className={styles.delete}
                onClick={() => deleteCollection(collection.id)}>
                <p>Удалить</p>
                </button>
            </div>
        </div>
    );
}