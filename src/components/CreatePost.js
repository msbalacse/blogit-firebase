import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";

const CreatePost = () => {
  const date = new Date();
  const navigation = useNavigate();
  const PostRef = collection(db, "posts");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const document = {
      title: e.target.title.value,
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
  return (
    <div className="w-full md:flex md:justify-center">
      <form
        className="flex flex-col gap-4 p-4 sm:w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
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
          />
        </div>
        <div className="flex flex-col gap-2">
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
        </div>
        <div className="flex flex-col gap-2">
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
            <option value="song">News</option>
            <option value="song">Business</option>
            <option value="song">Education</option>
            <option value="song">Movie</option>
            <option value="song">Programming</option>
            <option value="song">Sports</option>
            <option value="game">Game</option>
            <option value="song">Song</option>
          </select>
        </div>
        <div className="flex items-center gap-1 p-2 my-4 text-sm bg-white rounded-full cursor-pointer w-fit">
          <AiOutlineSend
            style={{ color: "black", background: "transparent" }}
          />
          <input
            className="font-semibold cursor-pointer"
            type="submit"
            value="Post"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
