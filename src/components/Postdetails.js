import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const Postdetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const PostRef = useRef(collection(db, "posts"));
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(PostRef.current);
      setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [PostRef]);

  return (
    <div>
      {post.map((data) => {
        if (data.id === id) {
          console.log(data);
        }

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
    <div className="p-4">
      <div className="p-2 text-4xl font-extrabold bg-white border-l-8 border-primary-dark">
        <h1 className="bg-white">{title}</h1>
      </div>
      <p className="p-4 text-lg text-left text-white">{description}</p>
      <div className="flex gap-2">
        <p className="text-lg font-bold text-white">Tag :</p>
        <p className="px-4 font-bold w-fit bg-primary-dark">{tag}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold text-white">Owner :</p>
        <p className="font-bold w-fit text-primary-dark">{author.name}</p>
      </div>

      <p className="px-4 my-2 bg-white rounded-full w-fit">{date}</p>
    </div>
  );
};
