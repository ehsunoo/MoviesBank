import React from "react";
import Link from "next/link";

// Styles
import styles from "./styles/Movies.module.scss";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Custom Hooks
import { usePage } from "../hooks/usePage";

// Components
import Card from "./Card";
import Header from "./Header";

function Movies({ title, type, movies, page }) {
  const currentPage = parseInt(page);
  const [previousPagePath, nextPagePath] = usePage(page);

  return (
    <div className={styles.container}>
      <Header title={title} type={type} />
      <div className={styles.main}>
        {movies?.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
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

export default Movies;
