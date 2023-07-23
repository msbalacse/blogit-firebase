import React from "react";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  const { id, title, description, author } = data;
  const turcdesc = description.substring(0, 100) + "....";

  return (
    <div className="flex flex-col gap-3 border-[2px] p-4 border-primary-dark max-w-[350px] overflow-hidden">
      <Link
        to={`/post/${id}`}
        className="text-lg font-medium font-Poppin text-primary-dark"
      >
        {title}
      </Link>
      <p className="text-sm text-white">{turcdesc}</p>
      <div className="flex items-center justify-between">
        <p className="p-1 text-xs font-semibold rounded-md bg-primary-light w-fit">
          {author.name}
        </p>
      </div>
    </div>
  );
};

export default Post;
