import React from "react";
import FilterButtonsList from "./FilterButtonsList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { showMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  dispatch(showMenu());

  return (
    <div className="col-span-10">
      <FilterButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
