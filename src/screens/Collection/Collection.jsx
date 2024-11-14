import styles from "../Collection/Collection.module.css";
import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import React, { useState } from "react";

export default function Collection() {
  const [collections, setCollections] = useState([]);

  const addCollection = () => {
    setCollections([
      ...collections,
      { id: Date.now(), name: "", count: 0, status: "open" },
    ]);
  };

  const deleteCollection = (id) => {
    setCollections(collections.filter((collection) => collection.id !== id));
  };

  return (
    <>
      <Header></Header>
      <MainWrapper>
        <div className={styles.backgroung}>
          <p className={styles.name}>Коллекции</p>
          <div className={styles.collectionBlock}>
            <div className={styles.collectionButtonBlock}>
              <button
                className={styles.collectionButton}
                onClick={addCollection}
              >
                <p>+ Создать новую коллекцию</p>
              </button>
            </div>

            {collections.map((collection) => (
              <div key={collection.id} className={styles.collectionItem}>
                <div className={styles.collectionInfo}>
                  <input
                    className={styles.collectionName}
                    placeholder="Название"
                    type="text"
                  />
                  <div className={styles.inputBlock}>
                    <div className={styles.countBlock}>
                      <p className={styles.collectionCount}>15 книг |</p>
                    </div>
                    <select
                      className={styles.status}
                      defaultValue={collection.status}
                    >
                      <option value="open">Публичная</option>
                      <option value="privat">Приватная</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    className={styles.delete}
                    onClick={() => deleteCollection(collection.id)}
                  >
                    <p>Удалить</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
