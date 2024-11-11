import styles from "..//BookInfo/BookInfo.module.css";
import Section from "../Section/Section";
import dateIcon from "../../../../assets/dateIcon.svg";
import React, { useState } from "react";

export default function BookInfo() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const collections = [
    { name: "Классика", status: "open" },
    { name: "Фентези", status: "private" },
    { name: "Для школы", status: "open" },
    { name: "Мой топ", status: "private" },
  ];

  const handleSelectChange = (e) => {
    const selectedCollection = collections.find(
      (collection) => collection.name === e.target.value
    );
    setSelectedStatus(selectedCollection?.status || "");
  };

  return (
    <Section>
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <input
            type="text"
            className={styles.inputAuthor}
            placeholder="Aвтор"
          ></input>
          <input
            type="text"
            className={styles.inputName}
            placeholder="Название "
          ></input>
        </div>
        <div className={styles.statInfo}>
          <div className={styles.ratingArea}>
            <input type="radio" id="star-5" name="rating" value="5" />
            <label
              htmlFor="star-5"
              title="Оценка «5»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-4" name="rating" value="4" />
            <label
              htmlFor="star-4"
              title="Оценка «4»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-3" name="rating" value="3" />
            <label
              htmlFor="star-3"
              title="Оценка «3»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-2" name="rating" value="2" />
            <label
              htmlFor="star-2"
              title="Оценка «2»"
              className={styles.starLabel}
            ></label>
            <input type="radio" id="star-1" name="rating" value="1" />
            <label
              htmlFor="star-1"
              title="Оценка «1»"
              className={styles.starLabel}
            ></label>
          </div>
          <input
            type="number"
            min="1"
            className={styles.inputPages}
            step="1"
            placeholder="Cтраниц"
          />

          <div>
            <select
              id="dropdownInput"
              name="dropdownInput"
              className={`${styles.dropdownInput} ${
                selectedStatus === "open" ? styles.open : styles.private
              }`}
              defaultValue=""
              onChange={handleSelectChange}
            >
              <option value="" disabled hidden>
                Коллекция
              </option>
              {collections.map((collection, index) => (
                <option
                  key={index}
                  value={collection.name}
                  data-status={collection.status}
                >
                  {collection.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.dateInputContainer}>
            <input
              type="date"
              placeholder="Старт 00.00.0000"
              className={styles.dateInput}
            />
            <button className={styles.dateButton}>
              <img src={dateIcon} alt="Календарь"></img>
            </button>
          </div>

          <div className={styles.dateInputContainer}>
            <input
              type="date"
              placeholder="Конец 00.00.0000"
              className={styles.dateInput}
            />
            <button className={styles.dateButton}>
              <img src={dateIcon} alt="Календарь"></img>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
