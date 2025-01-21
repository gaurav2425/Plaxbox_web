import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Article/Articles";
import Commingsoon from "./pages/Commingsoon/Commingsoon";
import Home from "./pages/Home";
import Social from "./pages/Social/Social";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar";
function App() {
  useEffect(() => {
    // Load gtag.js
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-WTY116E7NT";
    script1.async = true;
    document.head.appendChild(script1);

    // Add gtag configuration
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WTY116E7NT');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/commingsoon" element={<Commingsoon />}></Route>
        <Route exact path="/social" element={<Social />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/articles" element={<Articles />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
