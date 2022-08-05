// export default async function handler(req, res) {
//   const { id, page } = req.query;
//   const response = await fetch(`https://next-rho-nine.vercel.app/api/person/${id}/${page}`);
//   const data = await response.json();
// console.log("data: ",data)
//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const { id, page } = req.query;
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_cast=${id}&page=${page}&sort_by=popularity.desc`);
  const data = await response.json();

  res.status(200).json(data);
}
