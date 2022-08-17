import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, cleanUpItems } from "../../../redux/slices/searchSlice";

// Components
import Movies from "../../../components/Movies";

function SearchPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.search?.items);
  const totalPages = useSelector((state) => state?.search?.totalPages);

  useEffect(() => {
    if (router?.isReady) {
      dispatch(searchMovie({ name: router?.query?.name, page: router?.query?.page }));
      return () => {
        dispatch(cleanUpItems());
      };
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Movies Bank | Search:{router?.query?.name}</title>
      </Head>
      <Movies title={router?.query?.name} type="Search Results" movies={movies} page={router?.query?.page} totalPages={totalPages} />;
    </>
  );
}

export default SearchPage;
