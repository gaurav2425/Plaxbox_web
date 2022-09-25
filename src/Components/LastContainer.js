import React from "react";
import styles from "../Components/LastContainer.module.css";
function LastContainer() {
  return (
    <div className={styles.container}>
      <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
      <p>
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share
      </p>
      <img
        src={require("../assets/discord.png")}
        className={styles.image}
      ></img>

      <h2>Lets start journey</h2>
      <button>Download For Windows</button>
    </div>
  );
}

export default LastContainer;
