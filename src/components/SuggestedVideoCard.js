import React from "react";

const SuggestedVideoCard = ({ videoData }) => {
  const { title, channelTitle, thumbnails } = videoData.snippet;

  return (
    <div className="p-2 mx-1 my-1 flex w-96 hover:bg-gray-200 cursor-pointer">
      <img
        alt="video-thumbnail"
        src={thumbnails.medium.url}
        className="h-28 w-44 rounded-xl"
      />
      <div className="h-24 whitespace-normal">
        <h1 className="px-2 font-bold overflow-hidden">
          <p className="line-clamp-3">{title} </p>{" "}
        </h1>
        <h2 className="p-1 m-1"> {channelTitle} </h2>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;
