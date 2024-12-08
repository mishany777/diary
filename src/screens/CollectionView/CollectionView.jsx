import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import CollectionList from "./components/CollectionsList/CollectionsList";
import styles from '../CollectionView/CollectionView.module.css'
import api from '../../api'
import { useAuth } from "../../AuthContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CollectionView() {

    const { user } = useAuth();
    const [collection, setCollection] = useState({});
    const [books, setBooks] = useState([]);
    const { uuid } = useParams();

    const getBooks = async () => {
        await api.get(`/collections/${uuid}/books`)
        .then(res => {
            setBooks(res.data);
        })
        .catch(err => {
            alert(err);
        }) 
    }

    const getCollection = async () => {
        await api.get(`/collections/${uuid}`)
        .then(res => {
            const data = res.data;
            setCollection(data);
        })
        .catch(err => {
            alert(err);
        })
    }

    useEffect(() => {
        getCollection();
        getBooks();
    }, [user])


    return (
        <>
            <Header></Header>
            <MainWrapper>
                <CollectionSection>
                    <div className={styles.infoDiv}>
                        <h1 className={styles.title}>Книги коллекции <span className={styles.collName}>{collection.title}</span></h1>
                    </div>
                    {books.length > 0 ? <CollectionList collections={books} ></CollectionList> : <p>Тут пока нет книг...</p>}
                </CollectionSection>
            </MainWrapper>
        </>
    );
}