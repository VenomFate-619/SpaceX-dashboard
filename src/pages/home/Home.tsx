import React from "react";
import styles from "./home.module.css";
import Hero from "../../components/hero/Hero";
import RecentLaunches from "../recentLaunches/RecentLaunches";
import UpcomingLaunches from "../upcomingLaunches/UpcomingLaunches";
import BackToTop from "../../components/backToTop/BackToTop";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <RecentLaunches />
      <UpcomingLaunches />
      <BackToTop visibleDistance={1500} />
    </>
  );
};

export default Home;
