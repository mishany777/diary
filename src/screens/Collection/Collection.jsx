import styles from "../Collection/Collection.module.css";
import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import React, { useState, useEffect } from "react";
import CollectionItem from "./components/CollectionItem/CollectionItem";
import api from '../../api'

export default function Collection() {
  const [collections, setCollections] = useState([]);

  const [profileInfo, setProfileInfo] = useState({
    "username": "",
    "fist_name": "",
    "last_name": "",
    "email": ""
  });

  const getProfileInfo = async () => { 
    await api.get('/users/user')
    .then(response => {
      setProfileInfo(response.data);
    })
  }
  
  useEffect(() => {
    api.get('/')
  }, []);
  

  return (
    <>
      <Header></Header>
      <MainWrapper>
        <div className={styles.backgroung}>
          <p className={styles.name}>Коллекции</p>
          <div className={styles.collectionBlock}>
            <div className={styles.collectionButtonBlock}>
              <button
                className={styles.collectionButton}>
                <p>+ Создать новую коллекцию</p>
              </button>
            </div>
            {collections.map((collection) => (
              <CollectionItem></CollectionItem>
            ))}
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
