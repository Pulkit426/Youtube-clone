import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoSuggestionsSidebar = ({ videoId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getVideoSuggestions();
  }, []);

  const getVideoSuggestions = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=10&key=AIzaSyCGe2AQZKgHJAiLwHXPg_EAziT0iYTWLjM`
    );
    const json = await data.json();
    setData(json.items);

    console.log("DATA RELATED - ", json.items);
  };
  return (
    <div>
      SIDEBAR
      {data?.map((item) => (
        <VideoCard videoData={item} />
      ))}
    </div>
  );
};

export default VideoSuggestionsSidebar;
