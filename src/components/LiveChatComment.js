import React from "react";

const LiveChatComment = () => {
  return (
    <div className="flex items-center p-1 m-1">
      <img
        alt="profile"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
        className="w-8 h-10 pt-2"
      />
      <p className="font-bold mx-2 "> Pulkit Agrawal </p>
      <p> This is a live comment </p>
    </div>
  );
};

export default LiveChatComment;
