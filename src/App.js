import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Post from "./components/pages/Post";
import Navbar from "./components/pages/Navbar";
import Hooks from "./components/pages/Hooks";

export default function App() {
  return (
    <Router>
      <div className="appstyle">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Post />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/hooks" element={<Hooks />}></Route>

          <Route element={<Error />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// function About() {
//   return <div><h2>About</h2></div>;
// }

function Users() {
  return <div><h2>Users</h2></div>;
}