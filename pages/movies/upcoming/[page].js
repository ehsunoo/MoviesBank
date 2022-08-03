import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "../../../redux/store";
import { getUpcoming } from "../../../redux/slices/moviesSlice";

// Components
import Movies from "../../../components/Movies";
import LoadingSpinner from "../../../components/LoadingSpinner";

function Upcoming({ movies }) {
  const router = useRouter();
  const currentPage = router.query.page;
  if (router.isFallback) return <LoadingSpinner />;
  return (
    <>
      <Head>
        <title>Movie's Bank | Upcoming Movies</title>
      </Head>
      <Movies title="Upcoming" type="Movies" movies={movies} page={currentPage} />;
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
  await store.dispatch(getUpcoming(page));
  const data = store.getState();
  return {
    props: {
      movies: data.movies.items,
    },
  };
});

export default Upcoming;
