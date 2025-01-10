import styles from "../Collections/Collections.module.css";
import CollectionItem from "../CollectionItem/CollectionItem";
import { useEffect, useState } from "react";

export default function Collections(props) {

  const schedule = props.statistics.schedule;

  const month_names = {
    '1': 'Январь',
    '2': 'Февраль',
    '3': 'Март',
    '4': 'Апрель',
    '5': 'Май',
    '6': 'Июнь',
    '7': 'Июль',
    '8': 'Август',
    '9': 'Сентябрь',
    '10': 'Октябрь',
    '11': 'Ноябрь',
    '12': 'Декабрь',
  }

  const [shown, setShown] = useState(0);
  const shown_length = Math.floor(window.innerWidth / 320);

  const shownLeft = () => {
    if (shown === 0) return;
    setShown(shown-1);
  }
  const shownRight = () => {
    if (shown === schedule.length - shown_length) return;
    setShown(shown+1);
  }

  return (
    <div className={styles.collectionDiv}>
    <h1>Календарь активности</h1>
        <div className={styles.calendar_full}>
            <div className={styles.calendar}>    
            {schedule ? (schedule.map((month, i) => {
                return (<div className={`${styles.month} ${i < shown + shown_length && i >= shown ? "" : styles.hidden}`}>
                    <h2>{month_names[month.month]}</h2>
                    <table className={styles.table}>
                        {[...Array(Math.ceil((month.days + month.offset) / 7)).keys()].map(week => {
                            return (<tr>
                                {Array.from({length: 7}, (_, i) => i + week * 7).map(day => {
                                    if (day < month.offset || day >= month.offset + month.days) {
                                        return <td className={styles.td}></td>;
                                    } else {
                                        return <td className={`${styles.td} ${month.active_day.includes(day - month.offset + 1) ? styles.active_day : ''}`}>{day - month.offset + 1}</td>;
                                    }
                                })}
                            </tr>);
                        })}
                        
                    </table>
                </div>);
            })) : ""}
            </div>
            <div className={`${styles.movement} ${shown_length === 0 ? styles.hidden : ''}`}>
                <button className={styles.arrows} onClick={() => shownRight()}>&gt;</button>
                <button className={styles.arrows} onClick={() => shownLeft()}>&lt;</button>
            </div>
        </div>
    </div>
  );
}
