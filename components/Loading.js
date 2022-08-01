import React from "react";
import Image from "next/image";

// SVG
import spinner from "../public/assets/spinner.svg";

// Styles
import styles from "./styles/Loading.module.scss";

function Loading(loadingWidth, loadingHeight) {
  return (
    <div className={styles.loading}>
      <Image src={spinner} width={loadingWidth} height={loadingHeight} layout="responsive" />
    </div>
  );
}

export default Loading;
