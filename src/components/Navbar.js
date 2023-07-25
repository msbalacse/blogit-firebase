import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import { AiOutlineGoogle, AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import SearchBox from "./SearchBox";

import { motion } from "framer-motion";

const Navbar = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  async function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
    navigation("/");
  }

  const PathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="flex flex-row flex-wrap items-center justify-around sm:justify-between w-full gap-4 p-8 mb-4 font-Victor"
    >
      <div className="logo">
        <h1 className="text-xl font-bold text-primary-dark">
          <NavLink to="/">
            Blog
            <span className="text-sm text-white">it</span>
          </NavLink>
        </h1>
      </div>
      <SearchBox />
      <div className="flex items-center justify-evenly gap-4 w-[300px] text-sm text-white sm:gap-4">
        <NavLink
          className={`${PathMathRoute("/") && "border-b-2 border-white"}`}
          to="/"
        >
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink
              className={`flex items-center gap-1 px-2 ${
                PathMathRoute("/create-post") && "border-b-2 border-white"
              }`}
              to="/create-post"
            >
              <AiOutlinePlus />
              <span>New</span>
            </NavLink>
            <NavLink
              className={`${
                PathMathRoute("/user-profile") && "text-primary-dark"
              }`}
              to="/user-profile"
            >
              <CgProfile size={"25px"} />
            </NavLink>
            <button
              className="p-2 text-xs text-white rounded-lg bg-secondary-dark"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="flex gap-2 p-2 text-xs text-white rounded-lg bg-secondary-dark"
            onClick={handleLogin}
          >
            <AiOutlineGoogle
              size={"20px"}
              style={{ background: "transparent" }}
            />
            Login
          </button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
