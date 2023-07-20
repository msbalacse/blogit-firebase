import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Pagenotfound from "./components/Pagenotfound";
import CreatePost from "./components/CreatePost";
import Userprofile from "./components/Userprofile";
import Productedroute from "./routes/Productedroute";
import Postdetails from "./components/Postdetails";

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
          <Route path="/post/:id" element={<Postdetails />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
