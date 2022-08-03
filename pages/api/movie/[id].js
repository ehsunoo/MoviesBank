// export default async function handler(req, res) {
//   const id = req.query.id;
//   const response = await fetch(`https://next-teal-eta.vercel.app/api/movie/${id}`);
//   const data = await response.json();

//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const id = req.query.id;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos`);
  const data = await response.json();

  res.status(200).json(data);
}
