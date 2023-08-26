import React, { useEffect, useState } from "react";
import SuggestedVideoCard from "./SuggestedVideoCard";
import {
  YOUTUBE_API_URL,
  YOUTUBE_RELATED_VIDEOS_API,
} from "../utils/constants";
import { Link } from "react-router-dom";

const VideoSuggestionsSidebar = ({ videoId }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoSuggestions();
  }, []);

  const getVideoSuggestions = async () => {
    const data = await fetch(YOUTUBE_API_URL + "&relatedToVideoId=" + videoId);
    const json = await data.json();
    setVideoData(json.items);
  };

  return (
    <div className="p-2 m-3 w-96">
      {videoData?.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <SuggestedVideoCard videoData={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoSuggestionsSidebar;
