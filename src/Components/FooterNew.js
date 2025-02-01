import React from "react";
import styles from "./FooterNew.module.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function FooterNew() {
  return (
    <div className={styles.footer_container}>
      {/* <img
        src="https://i.ibb.co/VSyWs0z/Rectangle-44-1.png"
        className={styles.img}
      ></img> */}
      <div className={styles.overlay}>{/* <h1>hello</h1> */}</div>
      <div className={styles.footer_container_left}>
        <h1>
          THE GREATEST <br></br> EMERGING MARKET <br></br>FOR VC IS AMERICA
        </h1>
      </div>

      <div className={styles.footer_container_right}>
        <p>
          If you're looking for a motivated and skilled individual to
          collaborate on your next project or if you have an exciting
          opportunity where my expertise could be valuable, I'd love to discuss
          further! Let's join forces to create something exceptional. Feel free
          to reach out, and let's explore collaboration possibilities together.
          <br></br>
          Feel free to adjust this description to better reflect your skills,
          preferences, and the type of projects you're seeking to collaborate
          on. Tailoring it to your.
        </p>
        <h1 className={styles.connect_social}>Connect Social</h1>

        <div className={styles.social_icons}>
          <AlternateEmailIcon
            size={40}
            style={{ width: "40px", height: "40px" }}
            className={styles.email_icon}
          ></AlternateEmailIcon>
          <TwitterIcon
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
            className={styles.twitter_icon}
          ></TwitterIcon>
          <LinkedInIcon
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
            className={styles.linkedin_icon}
          ></LinkedInIcon>
          <InstagramIcon
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
            className={styles.instagram_icon}
          ></InstagramIcon>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
