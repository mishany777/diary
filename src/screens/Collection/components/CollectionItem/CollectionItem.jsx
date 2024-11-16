import styles from '../CollectionItem/CollectionItem.module.css'

export default function CollectionItem(props) {
    const item = props.collection;

    const changeState = async (state) => {
        console.log(`new state ${state}`);
    }

    return (
        <div className={styles.collectionItem}>
            <div className={styles.collectionInfo}>
                <p>{item.title}</p>
            <div className={styles.inputBlock}>
                <div className={styles.countBlock}>
                <p className={styles.collectionCount}>{item.book_count} книг |</p>
            </div>
            <select
                className={styles.status}
                defaultValue={item.private}
                onChange={(e) => changeState(e.target.value)}
                >
                <option value={false}>Публичная</option>
                <option value={true}>Приватная</option>
                </select>
            </div>
            </div>
            <div>
                <button
                className={styles.delete}>
                <p>Удалить</p>
                </button>
            </div>
        </div>
    );
}