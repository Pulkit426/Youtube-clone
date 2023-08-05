import React from "react";

const VideoCard = ({ videoData }) => {
  const { title, channelTitle, thumbnails } = videoData.snippet;

  return (
    <div className="p-2 m-2 flex flex-col w-96 h-92">
      <img
        alt="video-thumbnail"
        src={thumbnails.medium.url}
        className="rounded-lg "
      />
      {/* <h1 className="my-1 font-bold text-l "> {title} </h1> */}

      <h1 className="my-2 mx-1 font-bold overflow-hidden">
        <p className="line-clamp-2">{title} </p>
      </h1>

      <h2> {channelTitle} </h2>
      {videoData?.statistics?.viewCount && (
        <h4>
          {(videoData?.statistics?.viewCount / 1000000).toFixed(1)}M Views
        </h4>
      )}
    </div>
  );
};

export default VideoCard;
