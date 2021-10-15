import React ,{useEffect}from "react";
import styles from "./hero.module.css";
import Timer from "../timer/Timer";
import getQuote from "../../content/quotes";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {fetchNextUpcomingLaunch} from '../../redux/reducer/launcheSlice'

const Hero: React.FC = () => {
  const { nextlaunch, loading } = useAppSelector((state) => state.launch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNextUpcomingLaunch());
  }, [dispatch]);

  return (
    <div className={styles.imgCon}>
      <div></div>
      {!loading && (
        <div className={`${styles.captionCon}`}>
          <div className={styles.nextLaunch}>
            <div>next launch: </div>
            <div>{nextlaunch.docs[0]?.name}</div>
          </div>
          <Timer time={nextlaunch.docs[0]?.date_local} />
          {/* elon mush quote */}
          <div className={styles.quote}>
            <span>{getQuote()} -</span>
            <span> elon musk</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
