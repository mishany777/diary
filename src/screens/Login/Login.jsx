import styles from '../Login/Login.module.css'
import api from '../../api'
import { useState } from "react";
import { redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

export default function Login() {
    
    const navigate = useNavigate();

    const { login } = useAuth();

    const [loginData, setLoginData] = useState({
        "username": "",
        "password": "",
    })

    const onChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const {username, password } = loginData;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        api.post('/users/login/', loginData)
        .then(response => {
            const data = response.data;
            login(data.key);
            navigate("/profile");
        })
        .catch(error => {
            alert(error);
        })
    }

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
                    <h1 className={styles.title}>Вход</h1>
                    <div className={styles.field}>
                        <p className={styles.description}>Имя пользователя</p>
                        <input type="text" required onChange={onChange} value={username} name="username"/>
                    </div>
                    <div className={styles.field}>
                        <p className={styles.description}>Пароль</p>
                        <input type="password" required onChange={onChange} value={password} name="password" />
                    </div>
                    <button className={styles.submit}>Войти</button>
                    <a href="" className={styles.login_link}>Еще нет аккаунта? <span className={styles.login_link_hover}>Зарегистрироваться</span></a>
                </form>
            </div>
        </>
    );
}