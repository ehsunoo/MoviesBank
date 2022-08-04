import React from "react";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "../../redux/store";
import { getPerson, getPersonMovies } from "../../redux/slices/personSlice";

// Components
import Person from "../../components/Person";
import LoadingSpinner from "../../components/LoadingSpinner";

function PersonPage({ person, movies }) {
  const router = useRouter();
  if (router.isFallback) return <LoadingSpinner />;
  return <Person person={person} movies={movies} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const id = context.params.id;
  await store.dispatch(getPerson(id));
  await store.dispatch(getPersonMovies(id));
  const data = store.getState();

  return {
    props: {
      person: data.person.item,
      movies: data.person.items,
    },
  };
});

export default PersonPage;
