import styles from '../CollectionsList/CollectionsList.module.css'
import CollectionItem from "../CollectionItem/CollectionItem";
import BookItem from '../../../../shared/BookItem/BookItem';

export default function CollectionList(props) {
    return (
        <div className={styles.list}>
            <ul className={styles.collectionList}>
                {props.collections.map(item => (
                    <BookItem title={item.title} author={item.author} uuid={item.uuid}></BookItem>
                ))}
            </ul>
        </div>
    );
}