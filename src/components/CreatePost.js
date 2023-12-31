import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";

const CreatePost = () => {
  const date = new Date();
  const navigation = useNavigate();
  const PostRef = collection(db, "posts");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const document = {
      title: e.target.title.value.toLowerCase(),
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      tag: e.target.tag.value,
    };
    await addDoc(PostRef, document);
    navigation("/");
  };

  const animate = {
    initial: {
      x: -100,
      opacity: 0,
      scale: 0.7,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full md:flex md:justify-center">
      <form
        className="flex flex-col gap-4 p-4 sm:w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={animate}
          className="flex flex-col gap-2"
        >
          <label
            className="text-lg font-bold text-primary-light "
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="py-1 text-sm text-white border-b focus:outline-none border-primary-light caret-white"
            type="text"
            name="title"
            required
            autoFocus
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={animate}
          className="flex flex-col gap-2"
        >
          <label
            className="text-lg font-bold text-primary-light"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="py-1 border-b h-[100px] resize-y focus:outline-none border-primary-light text-sm text-white "
            type="text"
            name="description"
            required
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={animate}
          className="flex flex-col gap-2"
        >
          <label
            className="text-lg font-bold text-primary-light"
            htmlFor="description"
          >
            Tag
          </label>
          <select
            name="tag"
            className="py-2 text-sm text-white border-b focus:outline-none border-primary-light "
            required
          >
            <option></option>
            <option value="news">News</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="movie">Movie</option>
            <option value="programming">Programming</option>
            <option value="sports">Sports</option>
            <option value="game">Game</option>
            <option value="song">Song</option>
            <option value="others">Others</option>
          </select>
        </motion.div>
        <motion.div
          initial={{
            y: -50,
          }}
          animate={{
            y: 0,
          }}
          className="flex items-center gap-1 p-2 my-4 text-sm bg-white rounded-full cursor-pointer w-fit"
        >
          <AiOutlineSend
            style={{ color: "black", background: "transparent" }}
          />
          <input
            className="font-semibold cursor-pointer"
            type="submit"
            value="Post"
          />
        </motion.div>
      </form>
    </div>
  );
};

export default CreatePost;
