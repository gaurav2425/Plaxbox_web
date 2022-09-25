import React from "react";
import styles from "./ArticleCard.module.css";
function ArticleCard() {
  return (
    <div className={styles.article_card}>
      <div className={styles.article_card_up}>
        <img
          src={require("../../assets/article.png")}
          className={styles.image}
        ></img>
      </div>
      <div className={styles.article_card_down}>
        <h1>Technologies</h1>
        <p>Ignite the creativity in every student.</p>
        <h2>Read more {">>"}</h2>
      </div>
    </div>
  );
}

export default ArticleCard;
