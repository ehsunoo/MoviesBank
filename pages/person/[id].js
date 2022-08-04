import React from "react";

// Redux
import { wrapper } from "../../redux/store";
import { getPerson } from "../../redux/slices/personSlice";

// Components
import Person from "../../components/Person";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useRouter } from "next/router";

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
  const data = await store.getState();

  return {
    props: {
      person: data.person.item,
    },
    notFound: true,
  };
});

export default PersonPage;
