import React from "react";
import Image from "next/image";

import styles from "./styles/Cover.module.scss";

function Cover({ movie }) {
  return (
    <div className={styles.cover}>
      <Image src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} width={330} height={495} layout="responsive" objectFit="contain" alt={movie.title} />
    </div>
  );
}

export default Cover;
