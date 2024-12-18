import styles from "../ProfileInfo/ProfileInfo.module.css";
import bigProfileIcon from "../../../../assets/bigProfileIcon.png";
import statusIcon from "../../../../assets/statusIcon.png";
import speedIcon from "../../../../assets/speedIcon.png";
import monthIcon from '../../../../assets/month_calendar.svg';
import alltime from '../../../../assets/time-past.svg';
import ball from '../../../../assets/cristmas.svg';
import spinner from "../../../../assets/spinner.svg"
import { useAuth } from "../../../../AuthContext";

import { useState, useEffect } from "react";
import api from '../../../../api'

export default function ProfileInfo(props) {
  
  const { getUser } = useAuth();
  const { username, first_name, last_name, email, bio } = props.profileInfo;
  const { per_day, per_month, per_year, anytime } = props.statistics;
  const [isEdit, setIsEdit] = useState(false);

  const [wasChanged, setWasChanged] = useState(false);

  const [editInfo, setEditInfo] = useState({});

  const handleEdit = async () => {
    if (!isEdit) {
      const data = {
        "first_name": first_name,
        "last_name": last_name,
        "bio": bio
      } 
      setEditInfo(data);
    }

    if (isEdit && wasChanged) {
      console.log(editInfo);
      await api.put('/users/user/update/', editInfo)
      .then(res => {
        getUser();
        setWasChanged(false);
      })
      .catch(err => {
        alert(err);
      })
    }

    setIsEdit(!isEdit);
  }

  const on_change = (key, value) => {
    const info = {...editInfo};
    info[key] = value;
    setEditInfo(info);
    setWasChanged(true);
  }

  return (
    <div className={styles.profileDiv}>

      <div className={styles.userInfo}>
        <div className={styles.profileBlock}>
          {username ? <>
            <img src={bigProfileIcon} alt="Профиль"></img>
            <p>{username}</p>
          </> : <img src={spinner} alt="Загрузка"></img>}
            
        </div>
        <div className={styles.statusBlock}>
          {username ? <>
            {isEdit ? <>
            <input value={editInfo.first_name} className={styles.editFieldName} onChange={(e) => on_change("first_name", e.target.value)} />
            <input value={editInfo.last_name} className={styles.editFieldName} onChange={(e) => on_change("last_name", e.target.value)} />
            </> : <p>{first_name + " " + last_name}</p>}
          <div className={styles.quoteBlock}>
          {isEdit ? <textarea className={styles.editFieldBio} value={editInfo.bio} onChange={(e) => on_change("bio", e.target.value)} /> 
          : 
          <p>{bio ? bio : "Нет описания"}</p>}
          </div>
          <button className={styles.editButton} onClick={handleEdit}>{isEdit ? "Сохранить" : "Редактировать"}</button>
          </> : <img src={spinner} alt="Загрузка"></img>}
          
        </div>
      </div>

      <div className={styles.statisticBlock}>
        <ul className={styles.statisticList}>
          {username ? <>
            <li className={styles.statisticElem}>
            <img src={speedIcon} width={60} alt="Скорость"></img>
            <p>
              <span>{per_day}</span> страниц в день
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={monthIcon} width={60} alt="Скорость"></img>
            <p>
              <span>{per_month}</span> книг за месяц
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={ball} width={60} alt="Скорость"></img>
            <p>
              <span>{per_year}</span> книг за год
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={alltime} width={60} alt="Скорость"></img>
            <p>
              <span>{anytime}</span> книг за все время
            </p>
          </li>
          </> : <img  src={spinner} width={190} alt="Скорость"></img>}         
        </ul>
      </div>
    </div>
  );
}
