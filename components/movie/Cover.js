import React from "react";
import Image from "next/image";

import styles from "./styles/Cover.module.scss";

function Cover({ movie }) {
  return (
    <div className={styles.cover}>
      <Image src={`https://image.tmdb.org/t/p/w780${movie?.poster_path}`} width={330} height={495} layout="responsive" />
    </div>
  );
}

export default Cover;
