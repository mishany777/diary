import styles from '../CollectionSection/CollectionSection.module.css'

export default function CollectionSection({children}) {

    return (
        <div className={styles.div}>
            {children}
        </div>
    );
}