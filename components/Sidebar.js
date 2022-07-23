import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles/Sidebar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar, faCalendar, faCircle } from "@fortawesome/free-solid-svg-icons";
import { getGenres } from "../redux/slices/genresSlice";
import Link from "next/link";

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
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faFire} />
                <span> Popular</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faStar} />
                <span>Top Rated</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
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
          {genres.map((genre) => (
            <li key={genre.id}>
              <Link href={`/genres/${genre.id}`}>
                <a>
                  <FontAwesomeIcon icon={faCircle} /> <span>{genre.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
