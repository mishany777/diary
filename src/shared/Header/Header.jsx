import miniProfileIcon from "../../assets/miniProfileIcon.png";
import logoIcon from "../../assets/logoIcon.png";
import styles from "./Header.module.css";
import MainWrapper from "../MainWrapper/MainWrapper";

export default function Header() {
  return (
    <header className={styles.header}>
      <MainWrapper>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <img src={logoIcon} alt="Логотип" />
          </div>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navContainer}>
                <a href="#">Подписки</a>
                <a href="#">Коллекции</a>
                <a href="#">Мои книги</a>
              </li>
              <li className={styles.miniProfile}>
                <a href="#">
                  <img src={miniProfileIcon} alt="Профиль" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </MainWrapper>
    </header>
  );
}
