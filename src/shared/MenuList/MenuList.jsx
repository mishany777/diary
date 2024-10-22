import homeIcon from "../../assets/homeIcon.png";
import profileIcon from "../../assets/profileIcon.png";
import bookIcon from "../../assets/bookIcon.png";
import colectionIcon from "../../assets/colectionIcon.png";
import miniProfileIcon from "../../assets/miniProfileIcon.png";
import styles from "./MenuList.module.css";
export default function MenuList() {
  return (
    <nav>
      <ul className={styles.MenuList}>
        <li className={styles.menuItem}>
          <img src={homeIcon} alt="Дом"></img>
          <a href="#">Главная</a>
        </li>
        <li className={styles.menuItem}>
          <img src={miniProfileIcon} alt="Профиль"></img>
          <a href="#">Профиль</a>
        </li>
        <li className={styles.menuItem}>
          <img src={bookIcon} alt="Книга"></img>
          <a href="#">Мои книги</a>
        </li>
        <li className={styles.menuItem}>
          <img src={colectionIcon} alt="Коллекция"></img>
          <a href="#">Коллекция</a>
        </li>
      </ul>
    </nav>
  );
}
