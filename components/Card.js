import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Card.module.scss";

function Card({ movie }) {
  const imageSrc = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`;
  return (
    <div className={styles.container}>
      <Link href={`/movie/${movie?.id}`}>
        <a>
          <div className={styles.cover}>
            <img
              src={imageSrc}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/assets/noimage.png";
              }}
            />
          </div>
          <div className={styles.details}>
            <p>{movie?.title}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
