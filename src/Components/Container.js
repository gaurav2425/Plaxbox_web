import React, { useEffect } from "react";
import styles from "./Container.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import LastContainer from "./LastContainer";
import { Button } from "@mui/material";

function Container() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      {/* <div className={styles.bar}>
        <h1>
          Discover cafes filled with fascinating and unexpected conversations
        </h1>
      </div> */}
      <div className={styles.container1}>
        <div className={styles.left_container1_content}>
          <h1 data-aos="fade-up">
            The <span>Cafe</span> &{" "}
            <span
              style={{
                color: "#61204E",
              }}
            >
              Audio
            </span>
          </h1>
          <h1 data-aos="fade-up">Based Dating</h1>
          <div
            style={{
              width: 500,
              color: "#000",
            }}
          >
            <p
              style={{
                color: "#fff",
                padding: 10,
                borderRadius: 10,
                fontWeight: "500",
                fontFamily: "poppins",
              }}
              data-aos="fade-up"
              className={styles.desc_banner}
            >
              Tattle is built on the belief that real connections start with
              real conversations. That’s why we’ve created a cafe-style,
              audio-first dating experience—where voices spark chemistry, and
              meaningful matches are made in minutes. No endless swiping, just
              genuine interactions that bring you closer to someone special.
              Here’s how we do it.
            </p>
          </div>
          <div
            className={styles.get_started_btn}
            style={{
              background: "#fff",
              marginTop: 25,
              paddingRight: 5,
              paddingLeft: 15,
              paddingTop: 5,
              paddingBottom: 5,
              borderRadius: 100,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: 17,
                color: "#000",
              }}
            >
              Get Started
            </h1>
            <div
              style={{
                padding: 15,
                background: "#61204E",
                borderRadius: 100,
                marginLeft: 15,
              }}
            >
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.740001 16 8.34465e-07M24 7L1.43051e-06 7"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              marginTop: "15%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={require("../assets/girls1.png")}
              style={{
                width: 300,
              }}
            ></img>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.container2_left}>
          <h1>
            We’re love <br></br> scientists
          </h1>

          <h2>
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
          <h1>Offer cafes that celebrate specific seasons or festivals</h1>

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
