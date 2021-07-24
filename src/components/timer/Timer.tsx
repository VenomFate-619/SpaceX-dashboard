import React, { useState, useEffect } from "react";
import styles from "./timer.module.css";

interface Props {
  time?: string;
}

const splitTime = (time: string) => {
  const perviousTime = new Date(time);
  const diff = Math.abs(perviousTime.valueOf() - Date.now().valueOf()) / 1000;

  let days: number | string = Math.floor(diff / (24 * 60 * 60));
  
  const remainingHours = diff % (24 * 60 * 60);

  let hours: number | string = Math.floor(remainingHours / (60 * 60));
  const remainingMinutes = remainingHours % (60 * 60);

  let minutes: number | string = Math.floor(remainingMinutes / 60);

  let seconds: number | string = Math.floor(remainingMinutes % 60);

  days = days.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return { days, hours, minutes, seconds };
};




const Timer: React.FC<Props> = ({ time }) => {
  
  const [date, setDate] = useState(splitTime(time!));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(splitTime(time!));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.countDown}>
      {/* days */}
      <div className={styles.time}>
        <h2>{date.days}</h2>
        <h4>{Number(date.days) > 1 ? "Days" : "Day"}</h4>
      </div>
      <div className={styles.dot}>:</div>
      {/* hours */}
      <div className={styles.time}>
        <h2>{date.hours}</h2>
        <h4>{Number(date.hours) > 1 ? "Hours" : "Hour"}</h4>
      </div>
      <div className={styles.dot}>:</div>
      {/* minutes */}
      <div className={styles.time}>
        <h2>{date.minutes}</h2>
        <h4>{Number(date.minutes) > 1 ? "Minutes" : "Minute"}</h4>
      </div>
      <div className={styles.dot}>:</div>
      {/* seconds */}
      <div className={styles.time}>
        <h2>{date.seconds}</h2>
        <h4>{Number(date.seconds) > 10 ? "Seconds" : "Second"}</h4>
      </div>
    </div>
  );
};

export default Timer;
