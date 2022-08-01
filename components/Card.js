import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Card.module.scss";
import { useImage } from "../hooks/useImage";

function Card({ movie }) {
  const imgSrc = `${process.env.IMAGE_BASE_URL}/w300${movie?.poster_path}`;
  const { coverSrc, coverErrorHandler } = useImage(imgSrc);
  return (
    <div className={styles.container}>
      <Link href={`/movie/${movie?.id}`}>
        <a>
          <div className={styles.cover}>
            <Image src={coverSrc} width={230} height={345} layout="responsive" alt={movie?.title} objectFit="contain" onError={coverErrorHandler} />
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
