import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsSection from "./CommentsSection";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  dispatch(closeMenu());

  return (
    <div className="col-span-10 p-2 m-2">
      <div className="flex">
        <iframe
          width="900"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <LiveChatContainer />
      </div>
      <CommentsSection />
    </div>
  );
};

export default WatchPage;
