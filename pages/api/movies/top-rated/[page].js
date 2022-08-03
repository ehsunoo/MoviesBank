// export default async function handler(req, res) {
//   const page = req.query.page;
//   const response = await fetch(`https://next-teal-eta.vercel.app/api/movies/top-rated/${page}`);
//   const data = await response.json();

//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const page = req.query.page;
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`);
  const data = await response.json();

  res.status(200).json(data);
}
