import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../../redux/slices/moviesSlice";
import Content from "../../components/Content";

function Popular() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items);

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return <Content title="Popular" movies={movies}/>;
}

export default Popular;
