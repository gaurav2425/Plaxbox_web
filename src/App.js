import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Article/Articles";
import Home from "./pages/Home";
import Social from "./pages/Social/Social";
function App() {
  console.log(window.pageYOffset);
  return (
    <Router>
      <Routes>
        <Route exact path="/social" element={<Social />}></Route>
        <Route exact path="/articles" element={<Articles />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
