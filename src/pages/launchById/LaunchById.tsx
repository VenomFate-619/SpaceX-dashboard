import React, { useEffect } from "react";
import styles from "./fun.module.css";
import DummyComponent from "../../components/upcomingCard/LaunchInfo";
import Info from "../../components/tableInfo/Info"

// const dummyData = {
//   name: "Starlink 4-10 (v1.5)",
//   date_utc: "2022-03-08T14:06:00.000Z",
//   flight_number: 153,
//   rocket: { name: "Falcon 9" },
//   launchpad: { full_name: "Vandenberg Air Force Base" },
//   payloads: [{ customer: ["United States"] }],
// };

const LaunchById: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
    const prevTitle = document.title;
    document.title = "title";
    return () => {
      document.title = prevTitle;
    };
  }, [])


  return (
    <main className={styles.main}>
      {/* <div className={styles.div}> fwefwe</div> */}
      {/* image*/}
      <img src="https://imgur.com/BrW201S.png" className={styles.image1}  alt="spaceX" />
      {/* info */}
      <DummyComponent launchInfo={{ flag: false, src: "fwe" }} />
      {/* rocket */}
      {/* tale */}

      {/* image */}
      <div className={styles.rocketImg}>
        <img
          src="https://x-info.eu/static/media/falcon9.7187de50.png"
          alt="rocket"
        />
      </div>
      {/* table info*/}
      <div className={styles.tableInfo}>
        <Info />
        <Info />
      </div>

      {/* yotube */}
      <div className={styles.iframeCon} >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yJC2hUuJuB4" title="YouTube video player"  ></iframe>
      </div>
      {/* social links */}
    </main>
  );
};

export default LaunchById;
