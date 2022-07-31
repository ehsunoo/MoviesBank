import React from "react";
import { useRouter } from "next/router";
import { wrapper } from "../../redux/store";

// Redux
import { getCast, getMovie } from "../../redux/slices/movieSlice";
import { getRecommendations } from "../../redux/slices/moviesSlice";

// Components
import Movie from "../../components/Movie";
import LoadingSpinner from "../../components/LoadingSpinner";

function MovieDetail(props) {
  const router = useRouter();
  const data = { ...props };
  if (router.isFallback) return <LoadingSpinner />;
  return <Movie data={data} />;
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
  // console.log("Static :", data)
  return {
    props: {
      movie: data.movie.item,
      cast: data.movie.cast,
      recommendations: data.movies.recommendations,
    },
  };
});

export default MovieDetail;
