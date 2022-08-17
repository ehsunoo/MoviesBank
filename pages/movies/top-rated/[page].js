// @ts-nocheck
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "../../../redux/store";
import { getTopRated } from "../../../redux/slices/moviesSlice";

// Components
import Movies from "../../../components/Movies";
import LoadingSpinner from "../../../components/LoadingSpinner";

function TopRatedPage({ movies, totalPages }) {
  const router = useRouter();
  const currentPage = router.query.page;
  if (router.isFallback) return <LoadingSpinner />;
  return (
    <>
      <Head>
        <title>Movies Bank | Top Rated Movies</title>
      </Head>
      <Movies title="Top Rated" type="Movies" movies={movies} page={currentPage} totalPages={totalPages} />;
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const page = context.params.page;
  await store.dispatch(getTopRated(page));
  const data = store.getState();
  return {
    props: {
      movies: data.movies.items,
      totalPages: data.movies.totalPages,
    },
  };
});

export default TopRatedPage;
