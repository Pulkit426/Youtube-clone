const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex m-2 p-2 bg-yellow-50 ">
      <img
        alt="profile"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
        className="w-12 h-14 pt-2"
      />
      <div className="pl-2 m-2">
        <h1 className="font-bold text-lg">{name}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Comment;
