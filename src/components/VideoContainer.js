import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL, YOUTUBE_CATEGORY_API_URL } from "../utils/constants";
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
    Music: YOUTUBE_CATEGORY_API_URL + "&videoCategoryId=10&chart=mostPopular",
    Sports: YOUTUBE_CATEGORY_API_URL + "&videoCategoryId=17&chart=mostPopular",
    Gaming: YOUTUBE_CATEGORY_API_URL + "&videoCategoryId=20&chart=mostPopular",
    News: YOUTUBE_CATEGORY_API_URL + "&videoCategoryId=25&chart=mostPopular",
    Vlogs: YOUTUBE_CATEGORY_API_URL + "&videoCategoryId=22&chart=mostPopular",
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
