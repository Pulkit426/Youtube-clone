import React, { useEffect, useRef, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCacheData } from "../utils/searchCacheSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const searchRef = useRef(null);

  const searchCacheData = useSelector((store) => store.searchCache);

  //To Handle Search API and debouncing

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCacheData[searchQuery])
        setSearchSuggestions(searchCacheData[searchQuery]);
      else getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //To handle Search List hidden or shown on Scrolling

  useEffect(() => {
    const handleScroll = () => {
      if (showSearchSuggestions && searchSuggestions && window.scrollY > 50) {
        setShowSearchSuggestions(false);
      }

      if (
        !showSearchSuggestions &&
        document.activeElement === searchRef.current &&
        searchSuggestions &&
        window.scrollY < 50
      ) {
        setShowSearchSuggestions(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showSearchSuggestions]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSearchSuggestions(json[1]);
    dispatch(
      addCacheData({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="h-8 my-3 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <img
          alt="logo"
          className="h-14 mx-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg.webp"
        />
      </div>

      <div className="col-span-12 px-10">
        <div>
          {" "}
          <input
            ref={searchRef}
            className="w-[35rem] rounded-l-full p-2 border-2 
          border-black-400"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchSuggestions(true)}
            onBlur={() => setShowSearchSuggestions(false)}
          />
          <button className="bg-gray-100 px-5 py-2 rounded-r-full border-2 border-black-100">
            {" "}
            🔍{" "}
          </button>
        </div>

        <div className="fixed bg-white w-[35rem]">
          <ul>
            {showSearchSuggestions &&
              searchSuggestions.map((item) => (
                <li className="py-2 px-5 hover:bg-gray-200"> 🔍 {item}</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="col-span-1 m-2">
        <img
          alt="profile-icon"
          className="h-8"
          src="https://freesvg.org/img/abstract-user-flat-4.png"
        />
      </div>
    </div>
  );
};

export default Header;
