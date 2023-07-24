import React, { useEffect, useRef, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Post from "../components/Post";
import { useTitle } from "../hooks/useTitle";
import { ApiContext } from "../context/ApiContext";
const Home = () => {
  const { posts, setPosts } = useContext(ApiContext);

  const PostRef = useRef(collection(db, "posts"));
  useTitle("Home");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(PostRef.current);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("---");
    }
    getPosts();
  }, [PostRef, setPosts]);
  return (
    <div className="grid justify-center w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 place-content-center md:grid-cols-3">
      {posts.map((data) => (
        <Post key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Home;
