import styles from "../ProfileInfo/ProfileInfo.module.css";
import bigProfileIcon from "../../../../assets/bigProfileIcon.png";
import statusIcon from "../../../../assets/statusIcon.png";
import speedIcon from "../../../../assets/speedIcon.png";
import monthIcon from '../../../../assets/month_calendar.svg';
import alltime from '../../../../assets/time-past.svg';
import ball from '../../../../assets/cristmas.svg';

import { useState, useEffect } from "react";
import api from '../../../../api'

export default function ProfileInfo(props) {
  

  const { username, first_name, last_name, email } = props.profileInfo;
  const { per_day, per_month, per_year, anytime } = props.statistics;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.profileDiv}>
      <div className={styles.userInfo}>
        <div className={styles.profileBlock}>
          <img src={bigProfileIcon} alt="Профиль"></img>
          <p>{username}</p>
        </div>

        <div className={styles.statusBlock}>
          <p>{first_name + " " + last_name}</p>
          <div className={styles.quoteBlock}>
          {isEdit ? null : <p>Сошел с ума после прочтения Война и Мир,пока читал его в школе</p>}
          </div>
          <button className={styles.editButton}>Редактировать</button>
        </div>
      </div>

      <div className={styles.statisticBlock}>
        <ul className={styles.statisticList}>
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
        </ul>
      </div>
    </div>
  );
}
