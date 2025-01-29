import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const navTabs = [
    {
      key: "Home",
      route: "/",
    },
    {
      key: "Mission",
      route: "/about",
    },
    {
      key: "Social",
      route: "/social",
    },
  ];
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.layer}></div> */}
      <div className={styles.navbar_left}>
        <img src={require("../assets/logo2.png")} className={styles.logo}></img>
        <Link to="/" className={styles.link}>
          <h1>Tattle</h1>
        </Link>
      </div>

      <div className={styles.navbar_right}>
        <ul>
          {navTabs?.map((tab, index) => {
            return (
              <Link
                to={tab?.route}
                onProgress={() => {
                  setActiveLink(tab?.key);
                }}
                className={[tab?.key == activeLink ? styles.link : styles.link]}
                key={index}
              >
                <li
                  className={[
                    tab?.key == activeLink ? styles.listlink : styles.link,
                  ]}
                >
                  {tab?.key}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className={styles.navbar_right_icon_container}>
        <MenuIcon className={styles.navbar_menu_icon}></MenuIcon>
      </div>
    </div>
  );
}

export default Navbar;
