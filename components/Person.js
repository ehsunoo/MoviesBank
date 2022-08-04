import Image from "next/image";
import React from "react";

// Styles
import styles from "./styles/Person.module.scss";

// Components
import Header from "./Header";
import Recommendations from "./movie/Recommendations";

function Person({ person, movies }) {
  const imgSrc = `${process.env.IMAGE_BASE_URL}/w780${person?.profile_path}`;

  const birthday = new Date(person?.birthday).getFullYear();
  const deathday = person?.deathday !== null ? new Date(person?.deathday).getFullYear() : null;

  return (
    <div className={styles.container}>
      <Header title={person?.name} />
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
      <div className={styles.movies}>
        <div className={styles.recTitle}>
          <p>Also Enteres In</p>
          <span>Movies</span>
          <Recommendations recommendations={movies} />
        </div>
      </div>
    </div>
  );
}

export default Person;
