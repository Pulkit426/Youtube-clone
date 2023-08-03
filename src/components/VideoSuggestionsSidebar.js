import React, { useEffect, useState } from "react";
import SuggestedVideoCard from "./SuggestedVideoCard";

const VideoSuggestionsSidebar = ({ videoId }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoSuggestions();
  }, []);

  const getVideoSuggestions = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=15&key=AIzaSyCGe2AQZKgHJAiLwHXPg_EAziT0iYTWLjM`
    );
    const json = await data.json();
    setVideoData(json.items);
  };

  return (
    <div className="p-2 m-3 w-96">
      {videoData?.map((item) => (
        <SuggestedVideoCard videoData={item} />
      ))}
    </div>
  );
};

export default VideoSuggestionsSidebar;
