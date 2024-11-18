import styles from './Note.module.css'

export default function Note(props) {

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}></div>
            <div className={styles.text_div}>
                <p className={styles.text}>{props.note.text}</p>
            </div>
            
        </div>
    );
}