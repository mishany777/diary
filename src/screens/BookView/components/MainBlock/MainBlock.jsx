import { useEffect, useState } from 'react';
import styles from '../MainBlock/MainBlock.module.css'
import Note from '../Note/Note';
import api from "../../../../api"
import { useAuth } from "../../../../AuthContext";

export default function MainBlock(props) {

    const { user } = useAuth();

    const [collections, setCollections] = useState([]);
    const [bookCollections, setBookCollections] = useState([]);

    useEffect(() => {
        if (!user.username) {
            return;
        }
        api.get(`/collections/user/${user.username}`)
        .then(res => {
            setCollections(res.data);
        })
        .catch(err => {
            alert(err);
        })
        
    }, [user])

    useEffect(() => {
        if (!props.book.book_id || (!user.username) || !(props.book.username === user.username))   {
            return;
        }
        api.get(`/books/${props.book.book_id}/collections`)
        .then(res => {
            const data = res.data;
            const clear_data = data.map(collection => (collection.uuid));
            setBookCollections(clear_data);
        })
        .catch(err => {
            alert(err);
        })
    }, [props.book.book_id])

    const onCheckboxToggle = async(uuid, checked) => {
        const data = {
            "book_id": props.book.book_id
        }
        if (!checked) {
            await api.post(`/collections/${uuid}/add_book`, data)
            .then(res => {
                const data = res.data;
                setBookCollections([...bookCollections, uuid]);
            })
        }
        else {
            await api.post(`/collections/${uuid}/remove_book`, data)
            .then(res => {
                const data = res.data;
                setBookCollections(bookCollections.filter(item => item !== uuid));
            })
        }
    }

    console.log(bookCollections);

    const stars = Math.floor(props.book.rating);
    return (
    <div className={styles.container}>
        <div className={styles.bookInfo + " " + styles.container_wrap}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <h1 className={styles.title}>{props.book.title}</h1>
                    <h1 className={styles.author}>{props.book.author}</h1>
                </div>
                {props.book.username === user.username ?
                <div className={styles.dropdown}>
                    <button className={styles.dropdownInput}>Добавить в коллекции</button>
                    <ul className={styles.dropdownList}>
                        {/* <li>
                            <input className={styles.dropdownInput} type="text" placeholder="Поиск" />
                        </li> */}
                        {collections.map(item => (
                            <li><label><input type="checkbox" onChange={() => onCheckboxToggle(item.uuid, bookCollections.includes(item.uuid))} checked={bookCollections.includes(item.uuid)} />{item.title}</label></li>
                        ))}
                    </ul>
                </div>
                : ""}
            </div>
           <div className={styles.ratings}>
            
                <div className={styles.ratingArea}>
                    {stars ? (Array(5).fill(1).map((_, i) => (<label
                    htmlFor="star-5"
                    title="Оценка «5»"
                    className={styles.starLabel + " " + `${i < stars ? `${styles.rategood}` : ""}` }
                    ></label>))) : ""}
                </div>
                <div className={styles.pagesDiv}><p>{props.book.pages} страниц</p></div>
            </div>  
                
        </div>
        
        <div className={styles.retelling + " " + styles.container_wrap}>
            <p className={styles.retelling_text}>{props.book.retelling}</p>
        </div>
        {props.notes.length > 0 ?
        <>
            <p className={styles.notes}>Заметки читателя</p>
            {
            props.notes.map(note => (
                <Note note={note}></Note>))
            }
        </> : ""
        }
      </div>
      );
}