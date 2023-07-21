import React from "react";

const VideoCard = ({ videoData }) => {
  const { title, channelTitle, thumbnails } = videoData.snippet;
  const { viewCount } = videoData.statistics;
  return (
    <div className="p-2 m-2 shadow-xl flex flex-col w-72">
      <img alt="video-thumbnail" src={thumbnails.medium.url} />
      <h1 className="my-1 font-bold text-l "> {title} </h1>
      <h2> {channelTitle} </h2>
      <h4> {(viewCount / 1000000).toFixed(1)}M Views </h4>
    </div>
  );
};

export default VideoCard;
