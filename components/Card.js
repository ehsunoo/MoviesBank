import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Card.module.scss";
import { useImage } from "../hooks/useImage";
import Loading from "./Loading";

function Card({ movie }) {
  const imgSrc = `${process.env.IMAGE_BASE_URL}/w300${movie?.poster_path}`;
  const [coverSrc, coverErrorHandler] = useImage(imgSrc);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, []);

  const onLoadHandler = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <Link href={`/movie/${movie?.id}`}>
        <a>
          <div className={styles.cover}>{loaded ? <Image src={coverSrc} width={230} height={345} layout="responsive" alt={movie?.title} objectFit="contain" onError={coverErrorHandler} onLoad={onLoadHandler} /> : <Loading width={10} height={10} />}</div>
          <div className={styles.details}>
            <p>{movie?.title}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
