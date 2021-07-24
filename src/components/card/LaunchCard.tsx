import React from 'react'
import spaceX from '../../assets/spaceLauncher.png'
import styles from "./launchCard.module.css"
import Button from '../button/Button'
import ToolTip from '../tooltip/ToolTip'

const LaunchCard:React.FC = () => {
    return (
      <>
      <div className={styles.cardBody}>
        <img src={spaceX} alt="hweh" />
        <div className={styles.name}>Transporter-2</div>
        <div className={styles.date}>July 1,2019 1:01 AM</div>
        <div className={styles.icons}>
          <div className={styles.status}>
            {/* success */}
            <ToolTip text="Misson Successfull">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                style={{ fill: "#000000" }}
              >
                <path
                  fill="#51B442"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                ></path>
                <path
                  fill="#000000"
                  d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                ></path>
              </svg>
            </ToolTip>
          </div>
          <div className={styles.fairing}>
            {/* fairing */}
            <ToolTip text="Fairing recovered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M27.0606 1H1V30.5485H27.0606C27.0606 30.5485 44.6364 28.1364 44.6364 16.0758C44.6364 4.01515 27.0606 1 27.0606 1Z"
                  stroke="white"
                />
              </svg>
            </ToolTip>
          </div>
          <div className={styles.booster}>
            {/* booster */}
            <ToolTip  text="Booster landed" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="48"
              >
                <path
                  d="M48.2727 24.9151V28.9455C48.2727 29.4977 47.825 29.9455 47.2727 29.9455H6.84848C6.2962 29.9455 5.84848 29.4977 5.84848 28.9455V24.9151C5.84848 24.3629 5.40077 23.9151 4.84848 23.9151H2C1.44772 23.9151 1 23.4674 1 22.9151V8.0303C1 7.47802 1.44772 7.0303 2 7.0303H4.84848C5.40077 7.0303 5.84848 6.58259 5.84848 6.0303V2C5.84848 1.44772 6.2962 1 6.84848 1H47.2727C47.825 1 48.2727 1.44772 48.2727 2V6.0303C48.2727 6.58259 48.7204 7.0303 49.2727 7.0303H52.1212C52.6735 7.0303 53.1212 7.47802 53.1212 8.0303V22.9151C53.1212 23.4674 52.6735 23.9151 52.1212 23.9151H49.2727C48.7204 23.9151 48.2727 24.3629 48.2727 24.9151Z"
                  stroke="#FAFF00"
                />
                <path
                  d="M36.8641 15.4728C36.8641 21.1891 32.2061 25.8273 26.455 25.8273C20.7038 25.8273 16.0459 21.1891 16.0459 15.4728C16.0459 9.75647 20.7038 5.11823 26.455 5.11823C32.2061 5.11823 36.8641 9.75647 36.8641 15.4728Z"
                  stroke="white"
                />
                <path
                  d="M30.8034 15.4727C30.8034 17.8586 28.8589 19.797 26.4549 19.797C24.051 19.797 22.1064 17.8586 22.1064 15.4727C22.1064 13.0869 24.051 11.1485 26.4549 11.1485C28.8589 11.1485 30.8034 13.0869 30.8034 15.4727Z"
                  stroke="#FAFF00"
                />
              </svg>
            </ToolTip>
          </div>
        </div>
        <Button text="SHOW DETAILS" />
      </div>
      </>
    );
}

export default LaunchCard;
