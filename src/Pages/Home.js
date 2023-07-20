import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Post from "../components/Post";
import { useTitle } from "../hooks/useTitle";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const PostRef = useRef(collection(db, "posts"));
  useTitle("Home");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(PostRef.current);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [PostRef]);
  return (
    <div className="grid justify-center w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 place-content-center md:grid-cols-3">
      {posts.map((data) => (
        <Post key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Home;
