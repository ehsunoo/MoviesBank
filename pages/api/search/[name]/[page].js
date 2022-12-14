// export default async function handler(req, res) {
//   const { name, page } = req.query;
//   console.log(name);
//   const response = await fetch(`https://next-teal-eta.vercel.app/api/search/${name}/${page}`);
//   const data = await response.json();

//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const { name, page } = req.query;
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=${page}&include_adult=false&query=${name}`);
  const data = await response.json();
  res.status(200).json(data);
}
