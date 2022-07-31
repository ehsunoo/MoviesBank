import React, { useRef } from "react";
import { useRouter } from "next/router";

// Style
import styles from "./styles/SearchBar.module.scss";

// Font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const inputRef = useRef();
  const formRef = useRef();
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${inputRef.current.value}/1`);
    formRef.current.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className={styles.input}>
        <form ref={formRef} onSubmit={submitHandler}>
          <input ref={inputRef} type="text" placeholder="Search for a movie ..." />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
