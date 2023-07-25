import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Post = ({ data }) => {
  const { id, title, description, author } = data;
  const turcdesc = description.substring(0, 100) + "....";

  const bounce = {
    initial: {
      y: 20,
      scale: 0.9,
    },
    animate: {
      y: 0,
      scale: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={bounce}
      className="flex flex-col gap-4 border-[4px] p-4 border-primary-dark max-w-[300px] overflow-hidden shadow-[5px_5px_0px_0px_rgba(255,255,255)] duration-300 hover:scale-105 group"
    >
      <Link
        to={`/post/${id}`}
        className="text-xl font-medium font-Poppin text-primary-dark group-hover:underline"
      >
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Link>
      <p className="text-sm text-white">{turcdesc}</p>
      <div className="flex items-center justify-between">
        <p className="p-1 text-xs font-semibold rounded-md bg-primary-light w-fit">
          {author.name}
        </p>
      </div>
    </motion.div>
  );
};

export default Post;
