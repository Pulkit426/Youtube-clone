import React from "react";
import LiveChatComment from "./LiveChatComment";

const LiveChatContainer = () => {
  return (
    <div className="p-2 mx-2 w-96 h-[450px] border border-black overflow-scroll">
      <h1 className="text-2xl font-bold p-1 m-1 "> Live Chat</h1>
      <LiveChatComment />
      <LiveChatComment />
      <LiveChatComment />
      <LiveChatComment />
    </div>
  );
};

export default LiveChatContainer;
