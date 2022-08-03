import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "../../redux/store";
import { getCast, getMovie } from "../../redux/slices/movieSlice";
import { getRecommendations } from "../../redux/slices/moviesSlice";

// Components
import Movie from "../../components/Movie";
import LoadingSpinner from "../../components/LoadingSpinner";

function MovieDetail(props) {
  const router = useRouter();
  const data = { ...props };
  if (router.isFallback) return <LoadingSpinner />;
  return (
    <>
      <Head>
        <title>Movies Bank | {data.movie.title}</title>
        <meta name="description" content="Collection of movie's information." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Movie data={data} />;
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
  const id = context.params.id;
  await store.dispatch(getMovie(id));
  await store.dispatch(getCast(id));
  await store.dispatch(getRecommendations(id));
  const data = store.getState();
  return {
    props: {
      movie: data.movie.item,
      cast: data.movie.cast,
      recommendations: data.movies.recommendations,
    },
  };
});

export default MovieDetail;
