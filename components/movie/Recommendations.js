import React from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "./styles/Recommendations.module.scss";

// Components
import Card from "../../components/Card";

function Recommendations({ recommendations }) {
  // console.log(recommendations)
  return (
    <div className={styles.recommendations}>
      <div className={styles["rec-title"]}>
        <p>Recommended</p>
        <span>Movies</span>
      </div>
      <div className={styles["rec-content"]}>
        {recommendations?.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
