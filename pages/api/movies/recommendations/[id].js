// export default async function handler(req, res) {
//   const id = req.query.id;
//   const response = await fetch(`https://next-teal-eta.vercel.app/api/movies/recommendations/${id}`);
//   const data = await response.json();

//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const id = req.query.id;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=da0d44b54759bdcd2d6240fe1de2f2d9&language=en-US&page=1`);
  const data = await response.json();

  res.status(200).json(data);
}
