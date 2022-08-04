import React from "react";
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "./styles/Person.module.scss";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Custom Hooks
import { usePage } from "../hooks/usePage";

// Components
import Header from "./Header";
import Recommendations from "./movie/Recommendations";

function Person({ person, movies, page }) {
  const imgSrc = `${process.env.IMAGE_BASE_URL}/w780${person?.profile_path}`;

  const birthday = new Date(person?.birthday).getFullYear();
  const deathday = person?.deathday !== null ? new Date(person?.deathday).getFullYear() : null;

  const currentPage = parseInt(page);
  const [previousPagePath, nextPagePath] = usePage(currentPage);

  return (
    <div className={styles.container}>
      <Header title={person?.name} type="information" />
      <div className={styles.main}>
        <div className={styles.cover}>
          <Image width={330} height={495} src={imgSrc} layout="responsive" objectFit="contain" alt={person?.name} />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>
            <h3>{person?.name}</h3>
          </div>
          <div className={styles.date}>
            {birthday}
            {deathday !== null ? ` - ${deathday}` : ``}
          </div>
          <div className={styles.bio}>
            <p>{person?.biography}</p>
          </div>
          <div className={styles.imdb}>
            <a href={`https://www.imdb.com/title/${person?.imdb_id}`}>IMDB</a>
          </div>
        </div>
      </div>
      <div className={styles.recTitle}>
        <p>Also Enteres In</p>
        <span>Movies</span>
      </div>
      <Recommendations recommendations={movies} />
      <div className={styles.pages}>
        {currentPage > 1 ? (
          <Link href={previousPagePath}>
            <a className={styles.previousPage}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span> Previous Page</span>
            </a>
          </Link>
        ) : null}
        <Link href={nextPagePath}>
          <a className={styles.nextPage}>
            <span>Next Page </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Person;
