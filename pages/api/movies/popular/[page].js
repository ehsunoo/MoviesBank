export default async function handler(req, res) {
  const page = req.query.page;
  const response = await fetch(`https://next-teal-eta.vercel.app/api/movies/popular/${page}`);
  const data = await response.json();
  res.status(200).json(data);
}
