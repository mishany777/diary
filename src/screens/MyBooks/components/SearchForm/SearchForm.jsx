import styles from "../SearchForm/SearchForm.module.css";
import searchIcon from "../../../../assets/searchIcon.svg";
import addIcon from "../../../../assets/addIcon.svg";

export default function SearchForm() {
  return (
    <div className={styles.searchForm}>
      <div className={styles.searchBlock}>
        <input
          type="text"
          className={styles.inputForm}
          placeholder="Поиск по моим книгам"
        ></input>

        <button className={styles.searchButton}>
          <img src={searchIcon} alt="Поиск"></img>
        </button>
      </div>

      <div className={styles.addButtonContainer}>
        <button className={styles.addButton}>
          <img src={addIcon} alt="Поиск"></img>
        </button>
      </div>
    </div>
  );
}
