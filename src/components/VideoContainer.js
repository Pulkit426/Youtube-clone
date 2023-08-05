import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerHome from "./ShimmerHome";

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
