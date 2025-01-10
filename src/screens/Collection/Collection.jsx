import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import React, { useState, useEffect } from "react";
import CollectionItem from "./components/CollectionItem/CollectionItem";
import CreateCollectionItem from "./components/CreateCollectionItem/CreateCollectionItem";

import styles from '../Collection/Collection.module.css';

import { useNavigate } from "react-router-dom";

import api from '../../api'
import { useAuth } from "../../AuthContext";

export default function Collection() {

  const navigate = useNavigate();

  const { user } = useAuth();
  const [collections, setCollections] = useState([]);
  const [editMode, setEditMode] = useState(false);
  
  
  const getCollections = async () => {
    const username = user.username;
    if (username) {
      await api.get(`/collections/user/${username}`)
      .then(res => {
        const data = res.data;
        setCollections(data);
      })
    }
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  }

  useEffect(() => {
    getCollections();
  }, [user])

  useEffect(() => {
    document.title = "Колллекции";
  }, [])
  
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
              onClick={() => {toggleEdit()}}>
              <p>{editMode ? "-" : "+"} Создать новую коллекцию</p>
            </button>
          </div>
          {editMode && <CreateCollectionItem toggle={toggleEdit} rerender={getCollections}></CreateCollectionItem>}
          {collections.map((collection) => (
            <CollectionItem collection={collection} rerender={getCollections}></CollectionItem>
          ))}
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
