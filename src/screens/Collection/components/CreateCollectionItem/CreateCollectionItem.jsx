import styles from '../CollectionItem/CollectionItem.module.css'
import api from '../../../../api'
import { useState } from 'react';

export default function CreateCollectionItem(props) {

    const [privacy, setPrivacy] = useState(false);
    const [title, setTitle] = useState("");

    const createCollection = async () => {
        const data = {
            "title": title,
            "private": privacy
        }
        await api.post('/collections/create', data)
        .then(res => {
            const collection = res.data;
            props.rerender();
            props.toggle();
        })
        .catch(err => {
            alert(err);
        })
    } 

    return (
        <div className={styles.collectionItem}>
            <div className={styles.collectionInfo}>
                <input className={styles.input}
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                type='text'
                placeholder='Название коллекции'></input>
            <div className={styles.inputBlock}>
                <div className={styles.countBlock}>
                <p className={styles.collectionCount}>
                    <button
                className={styles.createButton}
                        onClick={() => createCollection()}>
                        <p>Создать</p>
                    </button> |</p>
            </div>
            <select
                className={styles.status}
                defaultValue={privacy}
                onChange={(e) => { setPrivacy(e.target.value) }}>
                <option value={false}>Публичная</option>
                <option value={true}>Приватная</option>
            </select>
            </div>
            </div>
            <div>
            </div>
        </div>
    );
}