import React from 'react'
import { Launches } from '../../redux/types/Launches';
import {getCountryCode} from "../../content/countryCode"
import styles from './upcoming.module.css'
interface Props {
  launchInfo : Launches
}
const Upcoming: React.FC<Props> = ({ launchInfo }) => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.top}>
        <h3>{launchInfo.name}</h3>
        <div className={styles.number}>#{launchInfo.flight_number}</div>
        <div className={styles.date}>
          {new Date(launchInfo.date_utc).toDateString()}
        </div>
      </div>
      <div className={styles.info}>
        <h2>Rocket :</h2>
        <h3>{launchInfo.rocket.name}</h3>
        <h2>Launch Site :</h2>
        <h3>{launchInfo.launchpad.full_name}</h3>
        <h2>Customer :</h2>
        <h3>{launchInfo.payloads[0].customers[0]}</h3>
      </div>
      <img
        src={`https://www.countryflags.io/${getCountryCode(
          launchInfo.payloads[0].nationalities[0]
        )}/flat/64.png`}
        alt={`${launchInfo.payloads[0].nationalities[0]}Flag`}
      />
    </div>
  );
};

export default Upcoming
