import styles from "../ProfileInfo/ProfileInfo.module.css";
import bigProfileIcon from "../../../../assets/bigProfileIcon.png";
import statusIcon from "../../../../assets/statusIcon.png";
import speedIcon from "../../../../assets/speedIcon.png";
export default function ProfileInfo() {
  return (
    <div className={styles.background}>
      <div className={styles.profileBlock}>
        <img src={bigProfileIcon} alt="Профиль"></img>
        <p>stoicismguy</p>
      </div>

      <div className={styles.statusBlock}>
        <p>Анисимов Михаил</p>
        <div className={styles.quoteBlock}>
          <img src={statusIcon} alt="Статус"></img>
          <p>Сошел с ума после прочтения Война и Мир,пока читал его в школе</p>
        </div>
      </div>

      <div>
        <ul className={styles.statisticList}>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>100</span> страниц в день
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>10</span> книг за месяц
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>100</span> книг за год
            </p>
          </li>
          <li className={styles.statisticElem}>
            <img src={speedIcon} alt="Скорость"></img>
            <p>
              <span>100</span> всего
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
