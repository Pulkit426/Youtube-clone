import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuActive = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuActive) return null;

  return (
    <div className="shadow-lg p-2 m-2 col-span-1">
      <ul>
        <li>Home </li>
        <li>Shorts </li>
        <li>Subscriptions </li>
        <li>Library </li>
        <li>History </li>
        <li>Your Videos </li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
};

export default Sidebar;
