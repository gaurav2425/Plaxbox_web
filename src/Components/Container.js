import React, { useEffect } from "react";
import styles from "./Container.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import LastContainer from "./LastContainer";

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
        <div className={styles.left_container1_content}>
          <h1>Meet Incridible</h1>
          <h1>people on internet</h1>
          {/* <h2
            style={{
              color: "#000",
              background: "#fff",
              padding: 10,
              borderRadius: 10,
            }}
          >
            Hinge is built on the belief that anyone looking for love should be
            able to find it. It’s also built on an acclaimed Nobel-Prize-winning
            algorithm, so we can succeed in getting you out on promising dates,
            not keeping you on the app. How we do it
          </h2> */}

          {/* <Link
            to="/commingsoon"
            className={styles.link}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className={styles.button_container} data-aos="flip-up">
              <img
                src={require("../assets/logo.png")}
                className={styles.img}
              ></img>
              <h3>Download Tattle</h3>
            </div>
          </Link> */}

          <div className={styles.quote_container}>
            {/* <h1>Meet Incridible people on internet and join their club</h1> */}
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.container2_left}>
          <h1>
            {/* data-aos="fade-up" */}
            We’re love <br></br> scientists
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

        <div
          style={{
            // background: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={require("../assets/hand.png")}
            className={styles.iphone}
          ></img>
        </div>
      </div>

      <div className={styles.container4}></div>

      <div className={styles.container5}>
        <div className={styles.container5left}>
          <img
            src={require("../assets/group.png")}
            // className={styles.iphone}
            style={{
              width: 600,
            }}
          ></img>
        </div>
        <div className={styles.container5right}>
          <h1 >
            {/* data-aos="fade-up" */}
            Offer cafes that celebrate specific seasons or festivals
          </h1>

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
