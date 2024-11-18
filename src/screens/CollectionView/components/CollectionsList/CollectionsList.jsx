import styles from '../CollectionsList/CollectionsList.module.css'
import CollectionItem from "../CollectionItem/CollectionItem";

export default function CollectionList(props) {
    return (
        <div className={styles.list}>
            <ul className={styles.collectionList}>
                {props.collections.map(item => (
                    <CollectionItem item={item}></CollectionItem>
                ))}
            </ul>
        </div>
    );
}