import styles from "../ProfileInfo/ProfileInfo.module.css";
import bigProfileIcon from "../../../../assets/bigProfileIcon.png";
import statusIcon from "../../../../assets/statusIcon.png";
import speedIcon from "../../../../assets/speedIcon.png";

import { useState, useEffect } from "react";
import api from '../../../../api'

export default function ProfileInfo() {

  const [fullname, setFullname] = useState("Noname");
  const [username, setUsername] = useState("username");

  const [speed, setSpeed] = useState(0);
  const [montly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);
  const [anytime, setAnytime] = useState(0);

  useEffect(() => {
    const username = localStorage.getItem('username');
    api.get(`/users/user/${username}`)
    .then(response => {
      const data = response.data;
      const userdata = data['user'];
      const stat = data['statistics'];
      setFullname(`${userdata['first_name'] + " " + userdata['last_name']}`);
      setUsername(username);
      setSpeed(stat['per_day']);
      setMonthly(stat['per_month']);
      setYearly(stat['per_year']);
      setAnytime(stat['anytime']);
    })
  }, []);

  return (
    <div className={styles.profileDiv}>
      <div className={styles.userInfo}>
        <div className={styles.profileBlock}>
          <img src={bigProfileIcon} alt="Профиль"></img>
          <p>{username}</p>
        </div>

        <div className={styles.statusBlock}>
          <p>{fullname}</p>
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
              <span>{speed}</span> страниц в день
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{montly}</span> книг за месяц
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{yearly}</span> книг за год
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>{anytime}</span> всего
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
