import React ,{useEffect} from "react";
import styles from './recentLaunches.module.css'
import LaunchCard from "../../components/card/LaunchCard";
import Button from "../../components/button/Button";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchRecentLaunch } from "../../redux/reducer/launcheSlice";

const RecentLaunches: React.FC = () => {
  const {recentlaunch,loading}= useAppSelector( state => state.launch )
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchRecentLaunch());
  },[dispatch])

  return (
    <div className="container">
      <div className={styles.top}>
        <h2>RECENT LAUNCHES</h2>
        <Button text="Show more" />
      </div>
      {/* landing_success:- booster landing sucess 
      recovered :- fairing recover
      */}
      <main className={styles.main}>
        {!loading &&
          recentlaunch.docs.map((data) => (
            <LaunchCard
              name={data?.name}
              key={data?.id}
              src={data?.links?.patch?.small}
              date={data?.date_utc}
              success={data?.success}
              recovered={data?.fairings?.recovered}
              landingSuccess={data?.cores[0]?.landing_success}
            />
          ))}
      </main>
    </div>
  );
};

export default RecentLaunches;
