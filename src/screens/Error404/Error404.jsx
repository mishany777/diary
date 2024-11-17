import styles from './Error404.module.css'
import Header from '../../shared/Header/Header';

export default function Error404() {
    return (
        <>
        <Header></Header>
        <div className={styles.div}>
            <h1 className={styles.title}>Ошибка 404</h1>
            <p>Такой страницы не существует</p>
        </div>
        </>
);
      
}