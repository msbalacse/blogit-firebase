import React from "react";
import { auth } from "../firebase/config";

const Userprofile = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <div>
        <img src={auth.currentUser.photoURL} className="w-16" alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-white">
          {auth.currentUser.displayName}
        </p>
        <p className="text-sm font-medium text-white">
          {auth.currentUser.email}
        </p>
        <p className="flex gap-2 text-sm font-medium text-white">
          <span className="px-2 text-black bg-primary-light">Joined</span>
          <span>{auth.currentUser.metadata.creationTime.substring(5, 17)}</span>
        </p>
      </div>
    </div>
  );
};

export default Userprofile;
