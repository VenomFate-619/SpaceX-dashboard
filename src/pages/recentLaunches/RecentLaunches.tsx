import React from "react";
import styles from './recentLaunches.module.css'
import LaunchCard from "../../components/card/LaunchCard";
import Button from "../../components/button/Button";

const RecentLaunches: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.top}>
        <h2>RECENT LAUNCHES</h2>
        <Button text="Show more" />
      </div>
      <main className={styles.main} >
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
      </main>
    </div>
  );
};

export default RecentLaunches;
