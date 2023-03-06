import React, { useEffect } from "react";
import styles from "./Container.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Container() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <h1>
          Discover millions of rooms, filled with fascinating and unexpected
          conversations
        </h1>
      </div>
      <div className={styles.container1}>
        <h1>Revolve around clubs</h1>
        <h1>and Rooms</h1>
        <h2>Join Clubs and Rooms</h2>

        <Link
          to="/commingsoon"
          className={styles.link}
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={styles.button_container} data-aos="flip-up">
            <img
              src={require("../assets/logo.png")}
              className={styles.img}
            ></img>
            <h3>Download PlaxBox</h3>
          </div>
        </Link>

        <div className={styles.quote_container}>
          <h1>Meet Incridible people on internet and join their club</h1>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.container2_left}>
          <h1>
            {/* data-aos="fade-up" */}
            Stay Connected <br></br> Stay Social
          </h1>
          {/* <h1 data-aos="zoom-in">your back.</h1> */}
          <h2>
            {/* data-aos="fade-up" */}
            Clubs are virtual spaces within a chat application where users can
            gather to discuss a particular topic or interest. These clubs can be
            created by users or by the chat application itself, and they
            typically have a specific theme or focus. For example, a club might
            be dedicated to discussing a particular hobby, political issue, or
            entertainment genre. Users can join clubs that interest them and
            participate in conversations with other members. Rooms, on the other
            hand, are virtual spaces within a club or chat application where
            users can have real-time conversations with each other. Rooms can be
            created by users or by the chat application, and they can be public
            or private.
          </h2>
          {/* <h2 data-aos="zoom-in">
            most exclusive rewards and cashbacks on . good luck.
          </h2> */}
        </div>

        <div>
          <img
            src={require("../assets/phone.png")}
            className={styles.iphone}
          ></img>
        </div>
      </div>

      <div className={styles.container4}></div>

      <div className={styles.container5}>
        <div className={styles.container5left}>
          <h1>Private clubs</h1>

          <h1>and Rooms</h1>
          <button>Join Club</button>
        </div>
        <div className={styles.container5right}>
          <p>
            Clubs are virtual spaces within a chat application where users can
            gather to discuss a particular topic or interest. These clubs can be
            created by users or by the chat application itself, and they
            typically have a specific theme or focus. For example, a club might
            be dedicated to discussing a particular hobby, political issue, or
            entertainment genre. Users can join clubs that interest them and
            participate in conversations with other members.
          </p>
          <p>
            Rooms, on the other hand, are virtual spaces within a club or chat
            application where users can have real-time conversations with each
            other. Rooms can be created by users or by the chat application, and
            they can be public or private. Public rooms are open to all members
            of the club or chat application, while private rooms are limited to
            a specific group of users. Users can join rooms that interest them
            and participate in text-based or voice-based conversations with
            other members
          </p>
          <p>
            Both clubs and rooms provide users with opportunities to connect
            with others who share their interests and engage in conversations in
            a structured and organized way. They can be a great way to build
            communities within a larger chat application, and they can help
            users to discover new topics, ideas, and perspectives.
          </p>
        </div>
      </div>

      {/* <div>
        <LastContainer></LastContainer>
      </div> */}
    </div>
  );
}

export default Container;
