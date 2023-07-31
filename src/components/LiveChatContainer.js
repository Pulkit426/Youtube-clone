import React, { useEffect, useState } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import {
  generateRandomComment,
  generateRandomName,
  randomIdGenerator,
} from "../utils/helper";

const LiveChatContainer = () => {
  const [commentInput, setCommentInput] = useState("");
  const dispatch = useDispatch();
  const liveChatCommentsData = useSelector((store) => store.liveChat.messages);

  const submitCommentHandler = () => {
    dispatch(
      addMessage({
        id: randomIdGenerator(),
        name: "Guest User",
        text: commentInput,
      })
    );

    setCommentInput("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          id: randomIdGenerator(),
          name: generateRandomName(),
          text: generateRandomComment(),
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold px-5  py-2 m-2 mb-0 h-[50px] border border-black rounded-t-lg">
        {" "}
        Live Chat
      </h1>
      <div className="p-2 mx-2 w-96 h-[400px] border border-black rounded-b-lg overflow-y-scroll flex flex-col-reverse">
        {liveChatCommentsData.map((item) => (
          <LiveChatComment key={item.id} comment={item} />
        ))}
      </div>

      <div>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          className="p-2 m-2 border border-black w-80 rounded-lg"
        />
        <button
          type="submit"
          onClick={() => submitCommentHandler()}
          className="p-2 bg-red-200 rounded-lg w-16"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChatContainer;