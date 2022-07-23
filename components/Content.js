import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./styles/Content.module.scss";

function Content({title, movies}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>Movies</p>
      </div>
      <div className={styles.main}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Content;
