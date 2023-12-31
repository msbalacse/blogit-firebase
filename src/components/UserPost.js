import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UserPost = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const PostRef = useRef(collection(db, "posts"));
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(PostRef.current);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("---");
    }
    getPosts();
  }, [PostRef, toggle]);
  return (
    <>
      {posts
        .filter((data) => data.author.id === userId)
        .map((data) => {
          const { id, title, description, author } = data;
          const turcdesc = description.substring(0, 100) + "....";
          const isAuth = JSON.parse(localStorage.getItem("isAuth"));

          async function handleClick() {
            const document = doc(db, "posts", id);
            await deleteDoc(document);
            setToggle(!toggle);
          }

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
              key={id}
              className="flex flex-col gap-4 border-[4px] p-4 border-primary-dark max-w-[300px] overflow-hidden shadow-[5px_5px_0px_0px_rgba(255,255,255)] duration-300 hover:scale-105 group"
            >
              <Link
                to={`/post/${id}`}
                className="text-lg font-medium font-Poppin text-primary-dark group-hover:underline"
              >
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </Link>
              <p className="text-sm text-white">{turcdesc}</p>
              <div className="flex items-center gap-4">
                <p className="p-1 text-xs font-semibold rounded-md bg-primary-light w-fit">
                  {author.name}
                </p>
                {isAuth && author.id === auth.currentUser.uid && (
                  <button className="text-primary-light" onClick={handleClick}>
                    <MdOutlineDeleteSweep />
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default UserPost;
