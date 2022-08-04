import React from "react";
import { useRouter } from "next/router";

// Redux
import { wrapper } from "../../redux/store";
import { getPerson } from "../../redux/slices/personSlice";

// Components
import Person from "../../components/Person";
import LoadingSpinner from "../../components/LoadingSpinner";

function PersonPage({ person }) {
  const router = useRouter();
  if (router.isFallback) return <LoadingSpinner />;
  return <Person person={person} />;
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
  const data = store.getState();

  return {
    props: {
      person: data.person.item,
    }
  };
});

export default PersonPage;
