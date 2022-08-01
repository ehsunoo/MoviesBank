import React from "react";
import Image from "next/image";

import styles from "./styles/Cover.module.scss";

function Cover({ movie }) {
  return (
    <div className={styles.cover}>
      <Image width={330} height={495} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}   layout="responsive" objectFit="contain" alt={movie.title} />
    </div>
  );
}

export default Cover;
