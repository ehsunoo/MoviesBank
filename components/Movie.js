import React from "react";

// Style
import styles from "./styles/Movie.module.scss";

// Components
import Header from "./Header";
import Content from "./movie/Content";
import Cover from "./movie/Cover";
import Recommendations from "./movie/Recommendations";

function Movie({ data }) {
  return (
    <div className={styles.container}>
      <Header title="Movie's information" />
      <div className={styles.main}>
        <Cover movie={data?.movie} />
        <Content movie={data?.movie} cast={data?.cast} />
      </div>
      <div className={styles.recTitle}>
        <p>Recommended</p>
        <span>Movies</span>
      </div>
      <Recommendations recommendations={data?.recommendations} />
    </div>
  );
}

export default Movie;
