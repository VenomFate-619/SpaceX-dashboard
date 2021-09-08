import React from "react";
import Upcoming from "../../components/upcomingCard/Upcoming";
import {fetchUpcomingLaunch} from "../../redux/reducer/launcheSlice" ;

const UpcomingLaunches: React.FC = () => {
  return (
    <div className="container">
      <h2 style={{ marginBottom: "1.5rem" }}>UPCOMING LAUNCHES</h2>
      <Upcoming />
      <Upcoming />
      <Upcoming />
      <Upcoming />
    </div>
  );
};

export default UpcomingLaunches;
