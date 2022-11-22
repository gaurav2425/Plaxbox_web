import React, { useEffect } from "react";
import styles from "./Container.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Container() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
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

        <div className={styles.button_container} data-aos="flip-up">
          <img src={require("../assets/logo.png")} className={styles.img}></img>
          <h3>Download PlaxBox</h3>
        </div>

        <div className={styles.quote_container}>
          <h1>Meet Incridible people on internet and join their club</h1>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.container2_left}>
          <h1 data-aos="fade-up">
            we’ve got <br></br> your back.{" "}
          </h1>
          {/* <h1 data-aos="zoom-in">your back.</h1> */}
          <h2 data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
            <br></br>
            quis nostrud exercitation ullamco laboris nisi ut
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
            trust as a virtue has consistently played an essential role in every
            great human achievement. and consistently, its importance has been
            overlooked. not just by individuals, but by entire societies. we
            felt it was time someone gave it the spotlight it deserves.
            especially for the ones who live by this virtue: the trustworthy
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt
          </p>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
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
