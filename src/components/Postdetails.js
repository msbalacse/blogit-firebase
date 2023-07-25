import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { motion } from "framer-motion";

const Postdetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const PostRef = useRef(collection(db, "posts"));
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(PostRef.current);
      setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [PostRef]);

  return (
    <div>
      {post.map((data) => {
        return (
          <div key={data.id}>
            {data.id === id ? <SinglePost data={data} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Postdetails;

const SinglePost = ({ data }) => {
  useTitle(data.title);

  const { title, description, author, tag, date } = data;
  return (
    <motion.div
      initial={{
        y: 15,
      }}
      animate={{
        y: 0,
      }}
      className="p-4"
    >
      <motion.div
        initial={{
          x: -50,
        }}
        animate={{
          x: 0,
        }}
        className="p-2 text-xl font-extrabold text-white border border-l-8 border-primary-dark border-l-primary-dark"
      >
        <h1 className="">{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
      </motion.div>
      <div className="p-2 ">
        <p className="my-4 text-base text-left text-white">{description}</p>
        <div className="flex items-center gap-2 mt-16">
          <p className="font-bold text-white text-bsse">Tag :</p>
          <p className="px-2 text-sm font-bold rounded-full w-fit bg-primary-dark ">
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-bold text-white">Owner :</p>
          <p className="text-sm font-bold w-fit text-primary-dark">
            {author.name}
          </p>
        </div>
        <p className="px-2 my-2 text-xs font-medium bg-white w-fit">{date}</p>
      </div>
    </motion.div>
  );
};
