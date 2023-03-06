import React from "react";
import styles from "../About/About.module.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AboutBar from "../../Components/AboutBar";
function About() {
  return (
    <div className={styles.about_container}>
      <Navbar></Navbar>
      <div className={styles.container1}>
        <div className={styles.container1_left}>
          <img src={require("../../assets/about_img.png")}></img>
        </div>

        <div className={styles.container1_right}>
          <h1>Find your tribe, and love them hard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            iaculis iaculis libero et pretium. Etiam viverra a tellus sed
            iaculis. Vivamus nisi orci, pulvinar eget bibendum vitae.Everyone
            has their own way of learning and expressing creativity. Apple
            technology and resources empower every kind of educator — and every
            kind of student — to learn, create and define their own success.
            Let’s move the world forward.
          </p>
        </div>
      </div>
      <div className={styles.bar_container}>
        <AboutBar></AboutBar>
        <AboutBar></AboutBar>
        <AboutBar></AboutBar>
        <AboutBar></AboutBar>
        <AboutBar></AboutBar>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default About;
