import React ,{useEffect} from "react";
import Upcoming from "../../components/upcomingCard/Upcoming";
import "./upcomingLaunches.css"
import {fetchUpcomingLaunch} from "../../redux/reducer/launcheSlice" ;
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const UpcomingLaunches: React.FC = () => {
   const { loading , upcomingLaunch } = useAppSelector((state) => state.launch);
   const dispatch = useAppDispatch();
   useEffect(() => {
     dispatch(fetchUpcomingLaunch());
   }, [dispatch]);
  return (
    <div className="container">
      <h2 className="upcoming_text">UPCOMING LAUNCHES</h2>
      {!loading &&
        upcomingLaunch.docs.map((data) => <Upcoming launchInfo={data}  key={data.id} />)}
    </div>
  );
};

export default UpcomingLaunches;
