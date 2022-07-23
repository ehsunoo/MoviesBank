export default async function handler(req, res) {
  const id = req.query.id;
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=da0d44b54759bdcd2d6240fe1de2f2d9&with_genres=${id}&sort_by=popularity.desc`);
  const data = await response.json();

  res.status(200).json(data);
}
