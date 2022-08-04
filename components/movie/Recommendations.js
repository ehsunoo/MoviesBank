import React from "react";

// Styles
import styles from "./styles/Recommendations.module.scss";

// Components
import Card from "../../components/Card";

function Recommendations({ recommendations }) {
  return (
    <div className={styles.recommendations}>
      <div className={styles.content}>
        {recommendations?.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
