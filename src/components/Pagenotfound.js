import React from "react";
import { useTitle } from "../hooks/useTitle";
import pagenotfound from "../assets/Pagenotfound.png";

const Pagenotfound = () => {
  useTitle("404 - pagenotfound");
  return (
    <div className="flex flex-wrap flex-col  items-center justify-center gap-4 my-4 p-4 text-4xl text-white">
      <img className="max-h-[400px]" src={pagenotfound} alt="pagenotfound" />
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-6xl font-bold text-red-600">404</span>
        <div>Page not! found</div>
      </div>
    </div>
  );
};

export default Pagenotfound;
