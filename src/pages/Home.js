import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import MobileScroll from "../Components/MobileScroll/MobileScroll";
import LastContainer from "../Components/LastContainer";
import Footer from "../Components/Footer";
import styles from "../pages/Home.module.css";
// import ResNavbar from "../Components/ResNavbar";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
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
          <MobileScroll></MobileScroll>
          <LastContainer></LastContainer>

          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default Home;
