export default async function handler(req, res) {
  const response = await fetch("https://next-teal-eta.vercel.app/api/getPopularMovies");
  const data = await response.json();
  res.status(200).json(data);
}
