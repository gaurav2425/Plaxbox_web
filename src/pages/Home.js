import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import MobileScroll from "../Components/MobileScroll/MobileScroll";
import LastContainer from "../Components/LastContainer";
import Footer from "../Components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="App_loader">
          <img
            src={require("../assets/logo.png")}
            className="loader_image"
          ></img>
        </div>
      ) : (
        <div>
          {/* <Navbar></Navbar> */}
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
