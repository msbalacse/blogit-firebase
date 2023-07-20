import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";

const CreatePost = () => {
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
          <label className="text-lg font-bold text-white" htmlFor="title">
            Title
          </label>
          <input
            className="py-1 border-b focus:outline-none border-primary-light"
            type="text"
            name="title"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-bold text-white" htmlFor="description">
            Description
          </label>
          <textarea
            className="py-1 border-b h-[100px] resize-y focus:outline-none border-primary-light"
            type="text"
            name="description"
            required
          />
        </div>
        <div className="flex items-center gap-2 p-2 my-4 text-sm bg-white rounded-full cursor-pointer w-fit">
          <AiOutlineSend
            style={{ color: "black", background: "transparent" }}
          />
          <input type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
