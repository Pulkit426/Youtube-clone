import Comment from "./Comment";

const CommentList = ({ commentsData }) => {
  return commentsData.map((item) => {
    return (
      <div>
        <Comment data={item} />

        <div className="pl-5 ml-5 border-l-4 border-l-black">
          <CommentList commentsData={item.replies} />
        </div>
      </div>
    );
  });
};

export default CommentList;
