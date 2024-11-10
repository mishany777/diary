import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import styles from '../Register/Register.module.css'
import logoIcon from '../../assets/logoIcon.svg'
import api from '../../api'

export default function Register() {
    return (
    <>
        <div className={styles.container}>
            <div className={styles.form}>
                <h1 className={styles.title}>Регистрация</h1>
                <div className={styles.field}>
                    <p className={styles.description}>Имя пользователя</p>
                    <input type="text" />
                </div>
                <div className={styles.names}>
                    <div className={styles.field}>
                        <p className={styles.description}>Имя</p>
                        <input type="text" />
                    </div>
                    <div className={styles.field}>
                        <p className={styles.description}>Фамилия</p>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.field}>
                    <p className={styles.description}>Email</p>
                    <input type="text" />
                </div>
                <div className={styles.field}>
                    <p className={styles.description}>Пароль</p>
                    <input type="password" />
                </div>
                <button className={styles.submit}>Зарегестрироваться</button>
                <a href="" className={styles.login_link}>Уже есть аккаунт? Войти</a>
            </div>
        </div>
    </>
    );
}