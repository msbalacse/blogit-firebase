import React, { useContext, useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useTitle } from "../hooks/useTitle";
import { ApiContext } from "../context/ApiContext";
import Post from "./Post";

const SearchResults = () => {
  const { search } = useContext(ApiContext);

  const [results, setResults] = useState([]);

  const PostRef = useRef(collection(db, "posts"));
  useTitle(search + " results");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(PostRef.current);
      setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("---");
    }
    getPosts();
  }, [PostRef, setResults]);

  return (
    <div className="p-4">
      {results.filter((data) => data.title.includes(search)).length > 0 ? (
        <>
          <div>
            <h1 className="text-2xl italic font-medium text-primary-dark">
              Your search results : {""}
              <span className="text-white underline">{search}</span>
            </h1>
          </div>
          <div className="grid justify-center w-full grid-cols-1 gap-4 mt-8 sm:grid-cols-2 place-content-center md:grid-cols-3">
            {results
              .filter((data) => data.title.includes(search))
              .map((data) => (
                <Post key={data.id} data={data} />
              ))}
          </div>
        </>
      ) : (
        <h1 className="text-3xl italic text-center text-white">
          No results found : {""}
          <span className="underline text-primary-dark">{search}</span>
        </h1>
      )}
    </div>
  );
};

export default SearchResults;
