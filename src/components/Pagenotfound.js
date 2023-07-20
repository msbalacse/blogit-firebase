import React from "react";
import { useTitle } from "../hooks/useTitle";

const Pagenotfound = () => {
  useTitle("404 - pagenotfound");
  return (
    <div className="flex justify-center my-24 text-4xl">
      <span className="text-6xl font-bold text-red-600">404</span>Page
      <span className="text-white"> not! </span>found
    </div>
  );
};

export default Pagenotfound;
