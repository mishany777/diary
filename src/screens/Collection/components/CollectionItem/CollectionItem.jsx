import styles from '../CollectionItem/CollectionItem.module.css'
import api from '../../../../api';

import { Link } from 'react-router-dom';

export default function CollectionItem(props) {
    const item = props.collection;

    const changeState = async (state) => {
        console.log(`new state ${state}`);
    }

    const deleteCollection = async () => {
        await api.delete(`/collections/${item.uuid}/delete`)
        .then(res => {
            props.rerender();
        })
    }

    const getBooleanStr = (str) => {
        return str.toLowerCase() === "true" ? true : false;
    }

    const changePrivacy = async (privacy) => {
        const requestData = {"private": getBooleanStr(privacy)}
        await api.put(`collections/${item.uuid}/set_privacy`, requestData)
        .then(res => {

        })
        .catch(err => {
            alert(err);
        })
    }

    return (
        <div className={styles.collectionItem}>
            <div className={styles.collectionInfo}>
                <Link className={styles.collectionLink} to={`/collections/${item.uuid}`}>
                    <p>{item.title}</p>
                </Link>
            <div className={styles.inputBlock}>
                <div className={styles.countBlock}>
                <p className={styles.collectionCount}>{item.book_count} книг |</p>
            </div>
            <select
                className={styles.status}
                defaultValue={item.private}
                onChange={(e) => changePrivacy(e.target.value)}
                >
                <option value={false}>Публичная</option>
                <option value={true}>Приватная</option>
                </select>
            </div>
            </div>
            <div>
                <button
                className={styles.delete}
                onClick={() => { deleteCollection() }}>
                <p>Удалить</p>
                </button>
            </div>
        </div>
    );
}