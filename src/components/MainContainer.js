import React from "react";
import FilterButtonsList from "./FilterButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <FilterButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
