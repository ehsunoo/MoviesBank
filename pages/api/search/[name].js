export default async function handler(req, res) {
  const query = req.query.name;
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=da0d44b54759bdcd2d6240fe1de2f2d9&query=${query}`);
  const data = response.json();
  res.status(200).json(data);
}
