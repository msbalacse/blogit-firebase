import React from "react";

const Post = ({ data }) => {
  const { title, description, author } = data;
  const turndesc = description.substring(0, 100) + "....";
  return (
    <div className="flex flex-col gap-2 border-[2px] p-4 border-primary-dark max-w-[350px]">
      <h1 className="text-lg font-medium font-Poppin text-primary-dark">
        {title}
      </h1>
      <p className="text-sm text-white">{turndesc}</p>
      <div>
        <p className="p-1 text-xs font-semibold rounded-md bg-primary-light w-fit">
          {author.name}
        </p>
      </div>
    </div>
  );
};

export default Post;
