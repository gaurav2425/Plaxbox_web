import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../../pages/Social/Social.module.css";
import Navbar from "../../Components/Navbar";
import SEO from "../../Seo/SEO";
function Social() {
  return (
    <div className={styles.social_container}>
      <SEO></SEO>
      <Navbar></Navbar>
      <div className={styles.social_icons}>
        <InstagramIcon
          className={styles.instagram_icon}
          style={{ width: 150, height: 150 }}
        ></InstagramIcon>
        <TwitterIcon
          className={styles.twitter_icon}
          style={{ width: 150, height: 150 }}
        ></TwitterIcon>
        <LinkedInIcon
          className={styles.linkedin_icon}
          style={{ width: 150, height: 150 }}
        ></LinkedInIcon>
      </div>
    </div>
  );
}

export default Social;
