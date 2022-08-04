// export default async function handler(req, res) {
//   const id = req.query.id;
//   const response = await fetch(`https://next-rho-nine.vercel.app/api/person/${id}`);
//   const data = await response.json();

//   res.status(200).json(data);
// }
export default async function handler(req, res) {
  const id = req.query.id;
  const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`);
  const data = await response.json();

  res.status(200).json(data);
}
