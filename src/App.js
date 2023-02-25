import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Article/Articles";
import Commingsoon from "./pages/Commingsoon/Commingsoon";
import Home from "./pages/Home";
import Social from "./pages/Social/Social";
import Navbar from "./Components/Navbar";
function App() {
  console.log(window.pageYOffset);
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route exact path="/commingsoon" element={<Commingsoon />}></Route>
        <Route exact path="/social" element={<Social />}></Route>
        <Route exact path="/articles" element={<Articles />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
