import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentVideoCategory } from "../utils/appSlice";

const Sidebar = () => {
  const videoCategories = [
    "Home",
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Vlogs",
  ];

  const isMenuActive = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if (!isMenuActive) return null;

  return (
    <div className="p-2 m-2 col-span-1 w-32">
      <ul>
        {videoCategories.map((item) => (
          <Link to="/">
            <li
              className="p-2 text-lg h-12 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => dispatch(setCurrentVideoCategory(item))}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
