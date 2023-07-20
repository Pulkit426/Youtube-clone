import React from "react";

const FilterButtonsList = () => {
  const dataList = [
    "All",
    "Sports",
    "Cricket",
    "Comedy",
    "Trailers",
    "Podcasts",
    "Coding",
  ];
  return (
    <div>
      {dataList.map((item) => (
        <button className="p-3 m-2 border border-black-50 rounded-md bg-gray-100">
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterButtonsList;
