import styles from "../SearchForm/SearchForm.module.css";
import searchIcon from "../../../../assets/searchIcon.svg";
import addIcon from "../../../../assets/addIcon.svg";

import { useState } from "react";

export default function SearchForm(props) {

  const [search, setSearch] = useState(props.searchValue);

  return (
    <div className={styles.searchForm}>
      <form className={styles.searchBlock}>
        <input
          type="text"
          list="books"
          name="search"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          className={styles.inputForm}
          placeholder="Поиск по моим книгам"
        ></input>
        <datalist id="books">
          {props.books.map((book) => {
            return <option value={book.title} />;
          })}
        </datalist>

        <button className={styles.searchButton}>
          <img src={searchIcon} alt="Поиск"></img>
        </button>
      </form>

        <a href="/addbook" className={styles.addButtonA}>
          <button className={styles.addButton}>
            <img src={addIcon} alt="Добавить"></img>
          </button>
        </a>
    </div>
  );
}
