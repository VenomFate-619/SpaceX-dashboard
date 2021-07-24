import React from "react";
import styles from "./hero.module.css";
import Timer from "../timer/Timer";
import getQuote from "../../content/quotes";
const Hero: React.FC = () => {
  return (
    <div className={styles.imgCon}>
      <div></div>
      <div className={`${styles.captionCon}`}>
        <div className={styles.nextLaunch}>
          <span>next launch: </span>
          <span>Starlink-29 (v1.0)</span>
        </div>
        <Timer time="2021-08-11T20:00:00-04:00" />
        {/* elon mush quote */}
        <div className={styles.quote}>
          <span>
            {getQuote()} -
          </span>
          <span> elon musk</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
