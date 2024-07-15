import React, { useEffect, useState } from "react";
import {
  YOUTUBE_API_URL,
  YOUTUBE_MUSIC_CATEGORY_API_URL,
  YOUTUBE_SPORTS_CATEGORY_API_URL,
  YOUTUBE_GAMING_CATEGORY_API_URL,
  YOUTUBE_NEWS_CATEGORY_API_URL,
  YOUTUBE_VLOGS_CATEGORY_API_URL,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerHome from "./ShimmerHome";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState(null);

  const currentVideoCategory = useSelector(
    (store) => store.app.currentVideoCategory
  );
  const [url, setUrl] = useState("");

  const categoryToUrl = {
    Home: YOUTUBE_API_URL,
    Music: YOUTUBE_MUSIC_CATEGORY_API_URL,
    Sports: YOUTUBE_SPORTS_CATEGORY_API_URL,
    Gaming: YOUTUBE_GAMING_CATEGORY_API_URL,
    News: YOUTUBE_NEWS_CATEGORY_API_URL,
    Vlogs: YOUTUBE_VLOGS_CATEGORY_API_URL,
  };

  useEffect(() => {
    setUrl(categoryToUrl[currentVideoCategory]);
  }, [currentVideoCategory]);

  const getVideosData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setVideosData(json.items);
  };

  useEffect(() => {
    getVideosData();
  }, [url]);

  if (!videosData) return <ShimmerHome />;

  return (
    <div className="flex flex-wrap">
      {videosData.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <VideoCard videoData={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
