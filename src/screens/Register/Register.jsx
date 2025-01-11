import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import styles from '../Register/Register.module.css'
import logoIcon from '../../assets/logoIcon.svg'
import api from '../../api'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [regData, setRegData] = useState({
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "email": ""
    })

    const onChange = (e) => {
        setRegData({...regData, [e.target.name]: e.target.value})
    }

    const {username, password, first_name, last_name, email} = regData;

    const onSubmit = async (e) => {
        e.preventDefault();

        const usernamePattern = /^[a-zA-Z0-9]+$/;
        if (!usernamePattern.test(username)) {
            alert("Имя пользователя должно содержать только английские буквы и цифры, без специальных символов.");
            return; // Прерываем выполнение функции, если проверка не прошла
        }

        
        await api.post('/users/register/', regData)
        .then(response => {
            const data = response.data;
            login(data['key']);
        })
        .catch(error => {
            alert(error);
        })
        navigate("/profile");
    }   

    useEffect(() => {
        document.title = "Регистрация";
    }, []);

    return (
    <>
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
                <h1 className={styles.title}>Регистрация</h1>
                <div className={styles.field}>
                    <p className={styles.description}>Имя пользователя</p>
                    <input type="text" required onChange={onChange} value={username} name="username"/>
                </div>
                <div className={styles.names}>
                    <div className={styles.field}>
                        <p className={styles.description}>Имя</p>
                        <input type="text" required onChange={onChange} value={first_name} name="first_name" />
                    </div>
                    <div className={styles.field}>
                        <p className={styles.description}>Фамилия</p>
                        <input type="text" required onChange={onChange} value={last_name} name="last_name" />
                    </div>
                </div>
                <div className={styles.field}>
                    <p className={styles.description}>Email</p>
                    <input type="text" required onChange={onChange} value={email} name="email" />
                </div>
                <div className={styles.field}>
                    <p className={styles.description}>Пароль</p>
                    <input type="password" required onChange={onChange} value={password} name="password" />
                </div>
                <button className={styles.submit}>Зарегестрироваться</button>
                <Link to="/login" className={styles.login_link}>Уже есть аккаунт? <span className={styles.login_link_hover}>Войти</span></Link>
            </form>
        </div>
    </>
    );
}