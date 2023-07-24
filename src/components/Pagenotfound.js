import React from "react";
import { useTitle } from "../hooks/useTitle";

const Pagenotfound = () => {
  useTitle("404 - pagenotfound");
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-24 text-4xl text-white">
      <div>
        <span className="text-6xl font-bold text-red-600">404</span>
      </div>
      <div>Page not! found</div>
    </div>
  );
};

export default Pagenotfound;
