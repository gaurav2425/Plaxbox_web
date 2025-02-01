import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import MobileScroll from "../Components/MobileScroll/MobileScroll";
import LastContainer from "../Components/LastContainer";
import Footer from "../Components/Footer";
import styles from "../pages/Home.module.css";
import SEO from "../Seo/SEO";
// import ResNavbar from "../Components/ResNavbar";
import FooterNew from "../Components/FooterNew";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      <SEO></SEO>
      {loading ? (
        <div className="App_loader">
          <img
            src={require("../assets/logo2.png")}
            className="loader_image"
          ></img>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <Container></Container>
          {/* <MobileScroll></MobileScroll>
          <LastContainer></LastContainer> */}

          {/* <Footer></Footer> */}
          {/* <FooterNew></FooterNew> */}
        </div>
      )}
    </div>
  );
}

export default Home;
