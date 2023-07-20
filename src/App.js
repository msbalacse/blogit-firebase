import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Pagenotfound from "./components/Pagenotfound";
import CreatePost from "./components/CreatePost";
import Userprofile from "./components/Userprofile";
import Productedroute from "./routes/Productedroute";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-post"
            element={
              <Productedroute>
                <CreatePost />
              </Productedroute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <Productedroute>
                <Userprofile />
              </Productedroute>
            }
          />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
