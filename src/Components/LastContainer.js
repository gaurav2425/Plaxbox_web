import React from "react";
import styles from "../Components/LastContainer.module.css";
function LastContainer() {
  return (
    <div className={styles.container}>
      <h1>Plaxbox offer a more intimate and exclusive space</h1>
      <p>
        Private rooms and clubs can be created by any user, and can be set to be
        public or private. Public rooms and clubs are visible to everyone, while
        private rooms and clubs can only be accessed by an invite or by request
        to join. Once inside, users can communicate through text, voice or video
        call, share files, play games and more
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
