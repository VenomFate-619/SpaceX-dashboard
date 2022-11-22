import React, { useEffect, SyntheticEvent, useState } from "react";
import styles from "./fun.module.css";
import DummyComponent from "../../components/upcomingCard/LaunchInfo";
import Info from "../../components/tableInfo/Info";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import fallBackImage from "../../assets/noImage.png";
import { LaunchQuery } from "../../api/query/launchesQuery";
import { launchesUrl, getData } from "../../api/api";
import { Launches } from "../../redux/types/Launches";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    bulletClass: "bullet",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    bulletClass: "bullet",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    bulletClass: "bullet",
  },
];

const LaunchById: React.FC = (props: any) => {
  let { id } = useParams<{ id: string }>();
  const [dataByStore, setDataByStore] = useState(
    useAppSelector((state) =>
      state.launch.recentlaunch.docs.find((l) => l.id === id)
    )
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  let fetchData = async () => {
    let query = LaunchQuery;
    query.query._id = id;
    const launch = await getData<Launches>(launchesUrl, query);
    setDataByStore(launch.docs[0]);
  };

  useEffect(() => {
    if (dataByStore === undefined) {
      // make api call
      fetchData();
    }
  }, []);

  const handleFallback = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallBackImage;
  };

  if (typeof dataByStore !== "undefined") {
    return (
      <main className={styles.main}>
        {/* image*/}
        <img
          src={dataByStore?.links?.patch?.small}
          className={styles.image1}
          alt="spaceX"
          onError={handleFallback}
        />
        {/* info */}
        <DummyComponent launchInfo={dataByStore} />
        {/* image */}
        <div className={styles.rocketImg}>
          <img
            src="https://x-info.eu/static/media/falcon9.7187de50.png"
            alt="rocket"
          />
        </div>
        {/* table info*/}
        <div className={styles.tableInfo}>
          {/* payload */}
          {dataByStore.payloads.map((x, i) => (
            <Info
              data={{ ...x, discriminator: "payload" }}
              type="payload"
              key={x.id}
              index={i + 1}
            />
          ))}
          <div style={{ marginTop: "3rem" }}></div>
          {/* cores */}
          {dataByStore.cores.map((x, i) => (
            <Info
              data={{ ...x, discriminator: "core" }}
              type="core"
              key={x.core}
              index={i + 1}
            />
          ))}
        </div>

        {/* yotube */}
        <div className={styles.iframeCon}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${dataByStore.links.youtube_id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        {/* image slider */}
        <div className={styles.imageSlider}>
          <ImageGallery
            items={dataByStore?.links?.flickr?.original ?? []}
            showThumbnails={false}
            showPlayButton={false}
            lazyLoad
            showBullets
          />
        </div>

        {/* social links */}
      </main>
    );
  }
  return <h2>hah</h2>;
};

export default LaunchById;
