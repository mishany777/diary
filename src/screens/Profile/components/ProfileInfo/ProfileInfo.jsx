import styles from "../ProfileInfo/ProfileInfo.module.css";
import bigProfileIcon from "../../../../assets/bigProfileIcon.png";
import statusIcon from "../../../../assets/statusIcon.png";
import speedIcon from "../../../../assets/speedIcon.png";

import { useState, useEffect } from "react";
import api from '../../../../api'

export default function ProfileInfo(props) {
  

  const { username, first_name, last_name, email } = props.profileInfo;
  const { per_day, per_month, per_year, anytime } = props.statistics;

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
            <img src={statusIcon} alt="Статус"></img>
            <p>
              Сошел с ума после прочтения Война и Мир,пока читал его в школе
            </p>
          </div>
        </div>
      </div>

      <div className={styles.statisticBlock}>
        <ul className={styles.statisticList}>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{per_day}</span> страниц в день
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{per_month}</span> книг за месяц
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{per_year}</span> книг за год
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{anytime}</span> книг за все время
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
