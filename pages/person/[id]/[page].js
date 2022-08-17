import React from "react";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "../../../redux/store";
import { getPerson, getPersonMovies } from "../../../redux/slices/personSlice";

// Components
import Person from "../../../components/Person";
import LoadingSpinner from "../../../components/LoadingSpinner";

function PersonPage({ person, movies, totalPages }) {
  const router = useRouter();
  const currentPage = router.query.page;
  if (router.isFallback) return <LoadingSpinner />;
  return <Person person={person} movies={movies} page={currentPage} totalPages={totalPages} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const { id, page } = context.params;
  const values = {
    id,
    page,
  };
  await store.dispatch(getPerson(id));
  await store.dispatch(getPersonMovies(values));
  const data = store.getState();
  return {
    props: {
      person: data.person.item,
      movies: data.person.items,
      totalPages: data.person.totalPages,
    },
    revalidate: 7 * 86400,
  };
});

export default PersonPage;
