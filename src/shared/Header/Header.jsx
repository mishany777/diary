import miniProfileIcon from "../../assets/miniProfileIcon.png";
import logoIcon from "../../assets/logoIcon.svg";
import styles from "./Header.module.css";
import MainWrapper from "../MainWrapper/MainWrapper";
import axios from "axios";
import api from '../../api'

export default function Header() {
  const s = 9;

  if (!localStorage.getItem('token')) {
    api.post("/users/login/",
        {
          "username": "fimozik",
          "password": "fimozik"
        }
    )
    .then(response => {
      const key = response.data['key'];
      localStorage.setItem('token', key);
      api.get("/users/user")
      .then(response => {
        const user_data = response.data;
        const username = user_data['username'];
        const first_name = user_data['first_name'];
        const last_name = user_data['last_name'];
        const email = user_data['email'];
        localStorage.setItem('username', username);
        localStorage.setItem('first_name', first_name);
        localStorage.setItem('last_name', last_name);
        localStorage.setItem('email', email);
      })
    })
    .catch(error => console.error(error));
  }
  else {
    console.log("WE GOT KEY~!");
  }
  
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
                <a href="/mybooks">Мои книги</a>
              </li>
              <li className={styles.miniProfile}>
                <a href="/">
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
