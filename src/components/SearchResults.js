import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [searchResultsData, setSearchResultsData] = useState({});
  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyCGe2AQZKgHJAiLwHXPg_EAziT0iYTWLjM"
    );
    const json = await data.json();
    console.log("SEARCH RESULTS - ", json);
    setSearchResultsData(json);
  };
  return (
    <div className="flex flex-wrap grid-cols-10">
      {searchResultsData?.items?.map((item) => (
        <VideoCard videoData={item} />
      ))}
    </div>
  );
};

export default SearchResults;
