import profileIcon from "../../assets/profileIcon.png";
import styles from "../Header/Header.module.css";
export default function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.HeaderList}>
          <li className={styles.logo}>
            <p>Лого</p>
          </li>
          <li className={styles.name}>
            <p>Название</p>
          </li>
          <li className={styles.userProfile}>
            <img src={profileIcon} alt="Профиль"></img>
          </li>
          <li className={styles.userName}>
            <p>Имя пользователя</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
