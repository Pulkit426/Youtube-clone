import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSearchSuggestions } from "../utils/appSlice";
import ShimmerHome from "./ShimmerHome";

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const dispatch = useDispatch();
  dispatch(setShowSearchSuggestions(false));

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_API + "%26q%3D" + searchQuery
    );
    const json = await data.json();
    setSearchResultsData(json);
  };

  if (!searchResultsData) return <ShimmerHome />;

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
