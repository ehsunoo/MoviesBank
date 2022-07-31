import React from "react";
import SearchBar from "./SearchBar";
import styles from "./styles/Header.module.scss";

function Header({ title, type }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>{type}</p>
      </div>
      <div className={styles.searchbox}>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
