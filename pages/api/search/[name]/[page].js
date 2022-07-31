export default async function handler(req, res) {
  const { name, page } = req.query;
  console.log(name);
  const response = await fetch(`https://next-teal-eta.vercel.app/api/search/${name}/${page}`);
  const data = await response.json();

  res.status(200).json(data);
}
