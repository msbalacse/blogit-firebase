import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";

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
  console.log(userId);
  return (
    <div>
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
            console.log(title);
          }

          return (
            <div className="flex flex-wrap my-4 flex-col gap-2 border-[2px] p-4 border-primary-dark max-w-[350px] overflow-hidden">
              <Link
                to={`/post/${id}`}
                className="text-lg font-medium font-Poppin text-primary-dark"
              >
                {title}
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
            </div>
          );
        })}
    </div>
  );
};

export default UserPost;
