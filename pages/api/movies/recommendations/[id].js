export default async function handler(req, res) {
  const id = req.query.id;
  const response = await fetch(`https://next-teal-eta.vercel.app/api/movies/recommendations/${id}`);
  const data = await response.json();

  res.status(200).json(data);
}
