import miniProfileIcon from "../../assets/miniProfileIcon.png";
import logoIcon from "../../assets/logoIcon.svg";
import styles from "./Header.module.css";
import MainWrapper from "../MainWrapper/MainWrapper";
import axios from "axios";

import { Link } from "react-router-dom";
import api from "../../api";


export default function Header() {
  return (
    <header className={styles.header}>
      <MainWrapper>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logoIcon} alt="Логотип" />
            </a>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navContainer}>
                <a href="/">Подписки</a>
                <a href="/collections">Коллекции</a>
                <a href="/mybooks">Мои книги</a>
              </li>
              <li className={styles.miniProfile}>
                <Link to='/profile'>
                  <img src={miniProfileIcon} alt="Профиль" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </MainWrapper>
    </header>
  );
}
