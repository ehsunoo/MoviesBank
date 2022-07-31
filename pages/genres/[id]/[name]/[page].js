import React from "react";
import { useRouter } from "next/router";

// Redux
import { getGenre } from "../../../../redux/slices/genresSlice";
import { wrapper } from "../../../../redux/store";

// Components
import Movies from "../../../../components/Movies";
import LoadingSpinner from "../../../../components/LoadingSpinner";

function Genres({ movies, name }) {
  const router = useRouter();
  const currentPage = router.query.page;
  if (router.isFallback) return <LoadingSpinner />;
  return <Movies title={`${name}'s`} type="Genre" movies={movies} page={currentPage} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const { id, name, page } = context.params;
  const values = {
    id,
    page,
  };
  await store.dispatch(getGenre(values));
  const data = store.getState();
  return {
    props: {
      movies: data.genres.items,
      name,
    },
  };
});

export default Genres;