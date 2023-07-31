import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState({});
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + "&q=" + searchQuery);
    const json = await data.json();
    console.log("SEARCH RESULTS - ", json);
    setSearchResultsData(json);
  };
  return (
    <div className="flex flex-wrap grid-cols-10">
      {searchResultsData?.items
        ?.filter((item) => item.id.kind === "youtube#video")
        ?.map((item) => (
          <Link to={"/watch?v=" + item.id.videoId} key={item.id.videoId}>
            <VideoCard videoData={item} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResults;
