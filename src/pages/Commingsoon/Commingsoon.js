import React from "react";
import Navbar from "../../Components/Navbar";
import styles from "../Commingsoon/Commingsoon.module.css";
function Commingsoon() {
  return (
    <div className={styles.commingsoon_maincontainer}>
      <Navbar></Navbar>
      <div className={styles.commingsoon_container}>
        <div>
          <img
            src={require("../../assets/comming_soon.png")}
            className={styles.logo}
          ></img>
          <div className={styles.commingsoon_txt}>Comming soon</div>
        </div>

        <div className={styles.launch_container}>
          <div className={styles.launch_txt}>
            We will let you know after launch
          </div>
          <div className={styles.input_container}>
            <input placeholder="Enter your email"></input>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commingsoon;
