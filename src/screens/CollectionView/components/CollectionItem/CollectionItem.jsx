import styles from '../CollectionItem/CollectionItem.module.css'

export default function CollectionItem(props) {
    const item = props.item;
    return (
        <li className={styles.item}>
            <div className={styles.image}></div>
            <div className={styles.name}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.author}>{item.author}</p>
            </div>
        </li>
    );
}