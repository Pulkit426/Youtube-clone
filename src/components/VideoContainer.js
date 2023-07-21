import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState(null);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideosData(json.items);
  };

  useEffect(() => {
    getVideosData();
  }, []);

  if (!videosData) return;

  return (
    <div className="flex flex-wrap">
      {videosData.map((item) => (
        <Link to={"/watch?v=" + item.id} id={item.id}>
          <VideoCard videoData={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
