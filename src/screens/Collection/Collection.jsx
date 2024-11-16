import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import React, { useState, useEffect } from "react";
import CollectionItem from "./components/CollectionItem/CollectionItem";

import styles from '../Collection/Collection.module.css';

import api from '../../api'
import { useAuth } from "../../AuthContext";

export default function Collection() {

  const { user } = useAuth();
  const [collections, setCollections] = useState([]);
  const [profileInfo, setProfileInfo] = useState(user);

  useEffect(() => {
    setProfileInfo(user);
  }, [user]);

  const getCollections = async () => {
    const username = profileInfo.username;
    if (username) {
      await api.get(`/collections/user/${username}`)
      .then(res => {
        const data = res.data;
        setCollections(data);
      })
    }
  }

  useEffect(() => {
    getCollections();
  }, [profileInfo])
  
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
              <CollectionItem collection={collection}></CollectionItem>
            ))}
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
