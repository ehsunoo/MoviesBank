import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { getGenre } from "../../../../redux/slices/genresSlice";
import { wrapper } from "../../../../redux/store";

// Components
import Movies from "../../../../components/Movies";
import LoadingSpinner from "../../../../components/LoadingSpinner";

function GenresPage({ movies, name, totalPages }) {
  const router = useRouter();
  const currentPage = router.query.page;
  if (router.isFallback) return <LoadingSpinner />;
  return (
    <>
      <Head>
        <title>Movies Bank | {name} Genre</title>
      </Head>
      <Movies title={`${name}'s`} type="Genre" movies={movies} page={currentPage} totalPages={totalPages} />;
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
      totalPages: data.genres.totalPages,
      name,
    },
    revalidate: 86400,
  };
});

export default GenresPage;
