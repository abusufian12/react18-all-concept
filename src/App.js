import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Post from "./components/pages/Post";
import Navbar from "./components/pages/Navbar";
import Hooks from "./components/pages/Hooks";
import {FavoriteColor, Car} from './components/all-hooks/learn-use-state';
import {Timer} from './components/all-hooks/learn-use-effect';
import StateUp from './components/pages/StateUp';
import LearnCustomHooks from './components/all-hooks/learn-custom-hooks';
import LearnCallback from './components/all-hooks/learn-use-callback';
import {LearnContext} from './components/all-hooks/learn-use-context';
import LearnMemo from './components/all-hooks/learn-use-memo';
import LearnReducer from './components/all-hooks/learn-use-reducer';


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
          {/* <Route path="/hooks" element={<Hooks />}></Route> */}
          <Route path="/hooks" element={<Hooks />}>
            <Route path="use-state" element={<FavoriteColor />} />
            <Route path="use-effect" element={<Timer />} />
            <Route path="use-ref" element={<Car />} />
            <Route path="use-context" element={<LearnContext />} />
            <Route path="use-reducer" element={<LearnReducer />} />
            <Route path="use-callback" element={<LearnCallback />} />
            <Route path="use-memo" element={<LearnMemo />} />
            <Route path="custom-hooks" element={<LearnCustomHooks />} />
          </Route>
          <Route path="/state-up" element={<StateUp />}></Route>

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