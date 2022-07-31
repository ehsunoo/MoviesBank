import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, cleanUpItems } from "../../../redux/slices/searchSlice";

// Components
import Movies from "../../../components/Movies";

function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.search.items);

  useEffect(() => {
    if (router.isReady) {
      dispatch(searchMovie({ name: router.query.name, page: router.query.page }));
      return () => {
        dispatch(cleanUpItems());
      };
    }
  }, [router]);

  return <Movies title={router.query.name} type="Search Results" movies={movies} page={router?.query?.page} />;
}

export default Search;
