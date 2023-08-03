import React, { useEffect, useState } from "react";
import SuggestedVideoCard from "./SuggestedVideoCard";
import { YOUTUBE_RELATED_VIDEOS_API } from "../utils/constants";

const VideoSuggestionsSidebar = ({ videoId }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoSuggestions();
  }, []);

  const getVideoSuggestions = async () => {
    const data = await fetch(
      YOUTUBE_RELATED_VIDEOS_API + "&relatedToVideoId=" + videoId
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
