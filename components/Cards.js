import React from "react";
import Card from "./Card";
import styles from "./styles/Cards.module.scss";

function Cards() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
}

export default Cards;
