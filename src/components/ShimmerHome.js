import React from "react";
import { randomIdGenerator } from "../utils/helper";

const ShimmerCard = () => {
  return (
    <div className="border m-2 p-2 animate-pulse">
      <p className="h-48 w-64 bg-gray-200 "></p>
      <p className="m-2 p-2 h-8 w-60 bg-gray-200"></p>
      <p className="m-2 p-2 h-2 w-32 bg-gray-200"></p>
    </div>
  );
};

const ShimmerHome = () => {
  const arr = new Array(25).fill(0);
  return (
    <div className="flex flex-wrap">
      {arr.map((item) => (
        <ShimmerCard key={randomIdGenerator()} />
      ))}
    </div>
  );
};

export default ShimmerHome;
