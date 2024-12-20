import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import api from "../../api"
import styles from "../Search/Search.module.css"
import searchIcon from "../../assets/searchIcon.svg";
import { Link } from "react-router-dom";
import book_photo from "../../assets/book_fill.jpg";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import userPhoto from "../../assets/profileIcon.png";

export default function Search() {

    const [result, setResult] = useState();
    const [searchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState(searchParams.get("search"));
    const [twoLast, setTwoLast] = useState();
    const searchValue = searchParams.get("search");
    

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const search = async () => {
        if (!searchValue) {
            return
        }
        await api.get(`/books/search/websearch?search=${searchValue}`)
        .then(response => {
            setResult(response.data);
            document.title = "Поиск: " + searchValue;
            
        })
        .catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        search();
    }, [searchValue])

    const getTwoLast = async () => {
        if (searchValue) {
            return;
        }
        console.log("getTwoLast");
        await api.get(`/books/get_two_last/`)
        .then(response => {
            setTwoLast(response.data);
        })
        .catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        getTwoLast();
    }, []);

    return (
        <>
        <Header></Header>
            <MainWrapper>
                <div className={styles.search}>
                    <form className={styles.searchBlock}>
                        <input
                        type="text"
                        name="search"
                        className={styles.inputForm}
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Поиск по сайту"
                        ></input>
                        
                        <button className={styles.searchButton} onClick={search}>
                        <img src={searchIcon} alt="Поиск"></img>
                        </button>
                    </form>
                    {result ? 
                        <ul className={styles.list}>
                        {result.map((book) => (
                            <li className={styles.item}>
                                <Link className={styles.link} to={`/books/${book.book_id}`}>
                                    <div className={styles.image}>
                                        <img className={styles.img_photo} src={book_photo} height={200} alt="Книга"></img>
                                    </div>
                                    <div className={styles.name}>
                                        <p className={styles.title}>{book.title}</p>
                                        <p className={styles.author}>{book.author}</p>
                                        
                                        <div className={styles.description}>
                                            <p>{book.retelling}</p>
                                        </div>
                                        <div className={styles.userAuthor}>
                                            <img src={userPhoto} width={40}></img>
                                            <p>{book.username}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}                
                    </ul>
                    :  <>
                    <h1 className={styles.article_title}>Последние добавленные книги</h1>
                    <ul className={styles.list}>
                        {twoLast ? twoLast.map((book) => (
                            <li className={styles.item}>
                            <Link className={styles.link} to={`/books/${book.book_id}`}>
                                <div className={styles.image}>
                                    <img className={styles.img_photo} src={book_photo} height={200} alt="Книга"></img>
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.title}>{book.title}</p>
                                    <p className={styles.author}>{book.author}</p>
                                    
                                    <div className={styles.description}>
                                        <p>{book.retelling}</p>
                                    </div>
                                    <div className={styles.userAuthor}>
                                        <img src={userPhoto} width={40}></img>
                                        <p>{book.username}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        )) : <h1>Ничего не найдено</h1>}
                    </ul>
                </>}
                    

                </div>
            </MainWrapper>
        </>
    );
      
}