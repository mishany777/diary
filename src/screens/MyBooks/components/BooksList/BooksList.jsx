import styles from "../BooksList/BooksList.module.css";
import BookItem from "../BookItem/BookItem";
export default function BooksList() {
  return (
    <div className={styles.list}>
      <ul className={styles.booksBlock}>
        <BookItem
          tag={["Отлично", "Классика"]}
          title="Война и мир"
          author="Лев Т"
        ></BookItem>
        <BookItem title="Мертвые души" author="Гоголь"></BookItem>
        <BookItem title="Война и мир" author="Лев Т"></BookItem>
        <BookItem
          tag={["Отлично", "Классика", "Рекомендуем"]}
          title="Мертвые души"
          author="Гоголь"
        ></BookItem>
        <BookItem title="Война и мир" author="Лев Т"></BookItem>
        <BookItem title="Война и мир" author="Лев Т"></BookItem>
        <BookItem
          tag={["Отлично"]}
          title="Война и мир"
          author="Лев Т"
        ></BookItem>
        <BookItem title="Война и мир" author="Лев Т"></BookItem>
        <BookItem title="Война и мир" author="Лев Т"></BookItem>
        <BookItem title="Война и мир" author="Лев Т"></BookItem>
      </ul>
    </div>
  );
}
