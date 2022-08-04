import React from "react";
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "../movie/styles/Content.module.scss";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Content({ movie, cast }) {
  return (
    <div className={styles.content}>
      <div className={styles.title}>{movie?.title}</div>
      <div className={styles.info}>{`${new Date(movie?.release_date).getFullYear()} / ${movie?.runtime} MIN / ${movie?.spoken_languages?.[0]?.english_name}`}</div>
      <div className={styles.rate}>
        <h3>Rate:</h3>
        <p>{movie?.vote_average}</p>
      </div>
      <div className={styles.genres}>
        <h3>The Genres:</h3>
        <ul>
          {movie?.genres?.map((genre, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCircle} color="rgb(255, 196, 0)" />
              <Link href={`/genres/${genre?.id}/${genre?.name}`}>
                <a>
                  <span>{genre?.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.synopsis}>
        <h3>The Synopsis:</h3>
        <p>{movie?.overview}</p>
      </div>
      <div className={styles.cast}>
        <h3>The Cast:</h3>
        <ul>
          {cast?.map((item) => (
            <li key={item?.id}>
              <Link href={`/person/${item?.id}/1`}>
                <a>
                  {item?.profile_path === "null" || item?.profile_path === null ? (
                    <Image src={`${process.env.BASE_URL}/assets/person.svg`} width={24} height={24} title={item?.name} alt={item?.name} objectFit="cover" layout="responsive" />
                  ) : (
                    <Image src={`${process.env.IMAGE_BASE_URL}/w185${item?.profile_path}`} width={24} height={24} title={item?.name} alt={item?.name} objectFit="cover" layout="responsive" />
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.links}>
        <a href={movie?.homepage}>Website</a>
        <a href={`https://www.imdb.com/title/${movie?.imdb_id}`}>IMDB</a>
        <a href={``}>Trailer</a>
      </div>
    </div>
  );
}

export default Content;
