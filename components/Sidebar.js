import React from "react";
import styles from "./styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className="discover">Discover</div>
      <div className="genres">Genres</div>
    </div>
  );
}

export default Sidebar;
