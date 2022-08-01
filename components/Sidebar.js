import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles/Sidebar.module.scss";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar, faCalendar, faCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { getGenres } from "../redux/slices/genresSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.list);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/assets/logo.png" />
      <div className={styles.discover}>
        <h2>Discover</h2>
        <ul>
          <li>
            <Link href="/movies/popular/1">
              <a>
                <FontAwesomeIcon icon={faFire} />
                <span> Popular</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/movies/top-rated/1">
              <a>
                <FontAwesomeIcon icon={faStar} />
                <span>Top Rated</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/movies/upcoming/1">
              <a>
                <FontAwesomeIcon icon={faCalendar} />
                <span> Upcoming</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.genres}>
        <h2>Genres</h2>
        <ul>
          {genres
            ? genres?.map((genre, index) => (
                <li key={index}>
                  <Link href={`/genres/${genre?.id}/${genre?.name}/1`}>
                    <a>
                      <FontAwesomeIcon icon={faCircle} /> <span>{genre?.name}</span>
                    </a>
                  </Link>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
