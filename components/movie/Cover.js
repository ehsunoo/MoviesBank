import React from "react";

import styles from "./styles/Cover.module.scss";

function Cover({ movie }) {
  return (
    <div className={styles.cover}>
      <img src={`https://image.tmdb.org/t/p/w780/${movie?.poster_path}`} decoding="async" />
    </div>
  );
}

export default Cover;
