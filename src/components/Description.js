import React, { useEffect, useRef, useState } from "react";
import { YOUTUBE_SPECIFIC_VIDEO_DATA_API } from "../utils/constants";

const Description = ({ videoId }) => {
  const [videoData, setVideoData] = useState();
  const [seeMore, setSeeMore] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    getDescription();
  }, []);

  const getDescription = async () => {
    const data = await fetch(
      YOUTUBE_SPECIFIC_VIDEO_DATA_API + "&id=" + videoId
    );
    const json = await data.json();
    setVideoData(json.items[0]);
  };

  if (!videoData) return;

  return (
    <div ref={contentRef}>
      <h1 className="p-2 m-2 font-bold text-2xl">
        {" "}
        {videoData.snippet.title}{" "}
      </h1>
      <p className="p-4 m-2 bg-gray-200 rounded-lg whitespace-pre-wrap">
        {seeMore
          ? videoData.snippet.description
          : videoData.snippet.description.slice(0, 100)}

        <button
          onClick={() =>
            setSeeMore((prevState) => {
              if (prevState === true) {
                window.scrollTo({
                  top: contentRef.current.offsetTop,
                  behavior: "smooth",
                });
              }
              return !prevState;
            })
          }
          className="pt-4 block font-bold"
        >
          {" "}
          {seeMore ? "See Less" : "See More"}
        </button>
      </p>
    </div>
  );
};

export default Description;
