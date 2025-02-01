import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AOS from "aos";
import DragHandleIcon from "@mui/icons-material/DragHandle";
function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
    <div className={styles.navbar} data-aos="fade-down">
      {/* <div className={styles.layer}></div> */}

      <div className={styles.navbar_right}>
        <div className={styles.navbar_left}>
          <img
            src={require("../assets/logo2.png")}
            className={styles.logo}
          ></img>
          <Link to="/" className={styles.link}>
            <h1>Tattle</h1>
          </Link>
        </div>
        <ul className={styles.links_home}>
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
        <DragHandleIcon
          className={styles.navbar_menu_icon}
          fontSize="large"
        ></DragHandleIcon>
      </div>
    </div>
  );
}

export default Navbar;
