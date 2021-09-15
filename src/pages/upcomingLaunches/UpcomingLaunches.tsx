import React ,{useEffect} from "react";
import Upcoming from "../../components/upcomingCard/Upcoming";
import {fetchUpcomingLaunch} from "../../redux/reducer/launcheSlice" ;
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const UpcomingLaunches: React.FC = () => {
   const { loading , upcomingLaunch } = useAppSelector((state) => state.launch);
   const dispatch = useAppDispatch();
   useEffect(() => {
     dispatch(fetchUpcomingLaunch());
     console.log(upcomingLaunch);
   }, [dispatch]);
  return (
    <div className="container">
      <h2 style={{ marginBottom: "1.5rem" }}>UPCOMING LAUNCHES</h2>
      {!loading &&
        upcomingLaunch.docs.map((data) => <Upcoming launchInfo={data}  key={data.id} />)}
    </div>
  );
};

export default UpcomingLaunches;
