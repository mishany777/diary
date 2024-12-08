import miniProfileIcon from "../../assets/miniProfileIcon.png";
import logoIcon from "../../assets/logoIcon.svg";
import styles from "./Header.module.css";
import MainWrapper from "../MainWrapper/MainWrapper";
import axios from "axios";

import logout_svg from "../../assets/logout.svg"
import login_svg from "../../assets/login.svg"

import { Link, redirect } from "react-router-dom";
import api from "../../api";
import { useAuth } from "../../AuthContext";

import { useNavigate } from "react-router-dom";


export default function Header() {

  const navigate = useNavigate();

  const { user, key, logout } = useAuth();

  const logout_button = () => {
    logout();
    navigate("/login");
  }

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
                { key ? (
                  <>
                    <Link to='/profile'>
                    <img className={styles.userProfile} src={miniProfileIcon} alt="Профиль" />
                    </Link>
                    <img className={styles.logout} src={logout_svg} onClick={logout_button} />
                  </>  
                  ) : <img className={styles.logout} src={login_svg} onClick={logout_button} />
                  }
              </li>
            </ul>
          </nav>
        </div>
      </MainWrapper>
    </header>
  );
}
