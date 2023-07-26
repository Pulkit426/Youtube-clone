import React from "react";
import { commentsData } from "../utils/mockData";
import CommentList from "./CommentsList";

const CommentsSection = () => {
  return (
    <div className="w-[900px]">
      <h1 className="font-bold text-2xl p-2 m-2"> Comments : </h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsSection;
