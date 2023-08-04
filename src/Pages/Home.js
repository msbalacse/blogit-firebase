import React, { useEffect, useRef, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Post from "../components/Post";
import { useTitle } from "../hooks/useTitle";
import { ApiContext } from "../context/ApiContext";
import SkeletonLoading from "../components/SkeletonLoading";
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
    <div className="flex flex-wrap w-full  gap-8 p-4  place-content-center md:grid-cols-3">
      {posts.map((data) =>
        data ? <Post key={data.id} data={data} /> : <SkeletonLoading />
      )}
    </div>
  );
};

export default Home;
