import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsSection from "./CommentsSection";
import LiveChatContainer from "./LiveChatContainer";
import VideoSuggestionsSidebar from "./VideoSuggestionsSidebar";
import Description from "./Description";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  dispatch(closeMenu());

  return (
    <div className="col-span-10 p-2 m-2 flex">
      <div className="flex flex-col m-2">
        <iframe
          width="900"
          height="510"
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <Description videoId={videoId} />

        <CommentsSection />
      </div>

      <div>
        <LiveChatContainer />
        <VideoSuggestionsSidebar videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
