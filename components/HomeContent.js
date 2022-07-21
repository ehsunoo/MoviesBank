import React from "react";
import Cards from "./Cards";
import styles from "./styles/HomeContent.module.scss";

function HomeContent() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Title</div>
      <div className={styles.main}>
        <Cards />
      </div>
    </div>
  );
}

export default HomeContent;
