import React from "react";
import styles from "./home.module.css";
import Hero from "../../components/hero/Hero";
import RecentLaunches from "../recentLaunches/RecentLaunches";
import UpcomingLaunches from "../upcomingLaunches/UpcomingLaunches";


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <RecentLaunches/>
      <UpcomingLaunches/>
    </>
  );
};

export default Home;
