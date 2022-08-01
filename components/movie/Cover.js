import React from "react";
import Image from "next/image";

import { useImage } from "../../hooks/useImage";

import styles from "./styles/Cover.module.scss";

function Cover({ movie }) {
  const imgSrc = `${process.env.IMAGE_URL_BASE}/w500${movie?.poster_path}`;
  const { coverSrc, coverErrorHandler } = useImage(imgSrc);

  return (
    <div className={styles.cover}>
      <Image width={330} height={495} src={coverSrc} layout="responsive" objectFit="contain" alt={movie.title} onError={coverErrorHandler} />
    </div>
  );
}

export default Cover;
