// export default async function handler(req, res) {
//   const response = await fetch("https://next-rho-nine.vercel.app/api/genres/getGenres");
//   const data = await response.json();
//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`);
  const data = await response.json();
  res.status(200).json(data);
}
