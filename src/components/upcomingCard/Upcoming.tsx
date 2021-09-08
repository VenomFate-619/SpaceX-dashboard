import React from 'react'
import styles from './upcoming.module.css'
const Upcoming: React.FC = () => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.top}>
        <h3>CRS-23</h3>
        <div className={styles.number}>#133</div>
        <div className={styles.date}>August 29,2021 5:30 AM</div>
      </div>
      <div className={styles.info}>
        <h2>Rocket :</h2>
        <h3>Falcon 9</h3>
        <h2>Launch Site :</h2>
        <h3>Kennedy Space Center Historic Launch Complex 39A</h3>
        <h2>Customer :</h2>
        <h3>NASA</h3>
      </div>
      <img src="https://www.countryflags.io/US/flat/64.png" alt="americaFlag" />
    </div>
  );
};

export default Upcoming
