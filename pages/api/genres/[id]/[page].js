export default async function handler(req, res) {
  const { id, page } = req.query;
  const response = await fetch(`https://next-teal-eta.vercel.app/api/genres/${id}/${page}`);
  const data = await response.json();

  res.status(200).json(data);
}
