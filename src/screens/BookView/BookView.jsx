import Header from '../../shared/Header/Header'
import MainWrapper from '../../shared/MainWrapper/MainWrapper';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CoverBlock from '../BookView/components/CoverBlock/CoverBlock';
import MainBlock from './components/MainBlock/MainBlock';
import api from '../../api'

import styles from '../BookView/BookView.module.css'

export default function BookView() {

    const { uuid } = useParams();
    const [book, setBook] = useState({});
    const [notes, setNotes] = useState([]);

    const getBook = async () => {
        await api.get(`/books/${uuid}`)
        .then(res => {
            const data = res.data;
            setBook(data);
        })
        .catch(err => {
            alert(err);
        })
    }

    const getNotes = async () => {
        await api.get(`/books/${uuid}/notes/`)
        .then(res => {
            const data = res.data;
            setNotes(data);
        })
        .catch(err => {
            alert(err);
        })
    }

    useEffect(() => {
        getBook();
        getNotes();
    }, [uuid])

    return(
        <>
            <Header></Header>
            <MainWrapper>
                <div className={styles.div}>
                    <CoverBlock></CoverBlock>
                    <MainBlock notes={notes} book={book}></MainBlock>
                </div>

            </MainWrapper>
        </>
    );
}