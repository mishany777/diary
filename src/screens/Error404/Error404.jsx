import styles from './Error404.module.css'
import Header from '../../shared/Header/Header';

export default function Error404() {
    return (
        <>
        <Header></Header>
        <div className={styles.div}>
            <div className={styles.text}>
                <h1 className={styles.title}>TODO</h1>
                <p>пока в разработке...</p>
            </div>    
        </div>
        </>
);
      
}