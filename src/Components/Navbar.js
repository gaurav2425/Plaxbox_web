import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img src={require("../assets/logo.png")} className={styles.logo}></img>
        <Link to="/" className={styles.link}>
          <h1>PlaxBox</h1>
        </Link>
      </div>

      <div className={styles.navbar_right}>
        <ul>
          <Link to="/about" className={styles.link}>
            <li>Home</li>
          </Link>

          <Link to="/about" className={styles.link}>
            <li>About</li>
          </Link>
          <Link to="/articles" className={styles.link}>
            <li>Articles</li>
          </Link>
          <Link to="/social" className={styles.link}>
            <li>Social</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
