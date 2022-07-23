import React from "react";
import Image from "next/image";
import styles from "./styles/Card.module.scss";

function Card({ movie }) {
  const imageSrc = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img src={imageSrc} />
      </div>
      <div className={styles.details}>
        <p>{movie.title}</p>
      </div>
    </div>
  );
}

export default Card;
