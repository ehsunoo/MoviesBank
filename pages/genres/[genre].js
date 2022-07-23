import React from "react";
import { useRouter } from "next/router";
import Content from "../../components/Content";
import { useDispatch, useSelector } from "react-redux";

function Genres() {
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state) => console.log(state));

  // router.query.genre

  return <></>;
  // return <Content title={router.query.genre} movies={movies} />;
}

export default Genres;
