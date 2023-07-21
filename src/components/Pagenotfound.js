import React from "react";
import { useTitle } from "../hooks/useTitle";

const Pagenotfound = () => {
  useTitle("404 - pagenotfound");
  return (
    <div className="flex flex-wrap justify-center gap-4 my-24 text-4xl">
      <div>
        <span className="text-6xl font-bold text-red-600">404</span>
      </div>
      <div>
        Page
        <span className="text-white"> not! </span>found
      </div>
    </div>
  );
};

export default Pagenotfound;
