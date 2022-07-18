export default async function handler(req, res) {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=da0d44b54759bdcd2d6240fe1de2f2d9&language=en-US&page=1");
  const jsonData = await response.json();
  res.status(200).json(jsonData);
}
