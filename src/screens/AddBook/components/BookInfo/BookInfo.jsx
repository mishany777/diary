import styles from "..//BookInfo/BookInfo.module.css";
import Section from "../Section/Section";
import dateIcon from "../../../../assets/dateIcon.svg";
import React, { useState } from "react";

export default function BookInfo(props) {

  return (
    <Section>
      <div className={styles.mainContainer}>
        <div className={styles.title}>

          <div className={styles.description}>
            <p className={styles.fname}>Автор</p>
            <input
              type="text"
              className={styles.inputField}
              onChange={(e) => props.changeBookInfo("author", e.target.value)}
              value={props.bookInfo.author}
              required
              placeholder="Пушкин Александр Сергеевич"
            ></input>
          </div>

          <div className={styles.description}>
            <p className={styles.fname}>Название книги</p>
            <input
              type="text"
              className={styles.inputField}
              onChange={(e) => props.changeBookInfo("title", e.target.value)}
              value={props.bookInfo.title}
              placeholder="Отцы и дети"
            ></input>
          </div>
        </div>
        <div className={styles.statInfo}>
          <div className={styles.ratingArea}>
            <input type="radio" id="star-5"
            onChange={(e) => props.changeBookInfo("rating", e.target.value)}
            name="rating" value={5} />
            <label
              htmlFor="star-5"
              title="Оценка «5»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-4"
            onChange={(e) => props.changeBookInfo("rating", e.target.value)}
             name="rating" value="4" />
            <label
              htmlFor="star-4"
              title="Оценка «4»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-3"
            onChange={(e) => props.changeBookInfo("rating", e.target.value)}
             name="rating" value="3" />
            <label
              htmlFor="star-3"
              title="Оценка «3»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-2"
            onChange={(e) => props.changeBookInfo("rating", e.target.value)}
            name="rating" value="2" />
            <label
              htmlFor="star-2"
              title="Оценка «2»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-1"
            onChange={(e) => props.changeBookInfo("rating", e.target.value)}
            name="rating" value="1" />
            <label
              htmlFor="star-1"
              title="Оценка «1»"
              className={styles.starLabel}
            ></label>
          </div>

          <div className={styles.description}>
            <p className={styles.fname}>Страницы</p>
            <input
              type="number"
              min="1"
              className={styles.inputPages}
              onChange={(e) => props.changeBookInfo("pages", e.target.value)}
              value={props.bookInfo.pages || ""}
              placeholder="437"/>
          </div>

          <div>
          <div className={styles.description}>
            <p className={styles.fname}>Приватность</p>
            <select
                className={styles.privacy}
                defaultValue={props.bookInfo.private}
                onChange={(e) => props.changeBookInfo("private", e.target.value)}>
                <option value={false}>Публичная</option>
                <option value={true}>Приватная</option>
            </select>
          </div>
          </div>
          <div className={styles.times}>
          <div className={styles.description}>
            <p className={styles.fname}>Дата начала</p>
            <div className={styles.dateInputContainer}>
              <input
                type="date"
                value={props.bookInfo.start_date || ""}
                onChange={(e) => props.changeBookInfo("start_date", e.target.value)}
                className={styles.dateInput}
              />
              <button className={styles.dateButton}>
                <img src={dateIcon} alt="Календарь"></img>
              </button>
            </div>
          </div>
          <div className={styles.description}>
            <p className={styles.fname}>Дата завершения</p>
            <div className={styles.dateInputContainer}>
              <input
                type="date"
                value={props.bookInfo.finish_date || ""}
                onChange={(e) => props.changeBookInfo("finish_date", e.target.value)}
                className={styles.dateInput}
              />
              <button className={styles.dateButton}>
                <img src={dateIcon} alt="Календарь"></img>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
