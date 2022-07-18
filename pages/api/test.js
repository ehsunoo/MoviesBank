export default async function handler(req, res) {
  const response = await fetch("https://api.freerealapi.com/blogs");
  const jsonData = await response.json();
  res.status(200).json(jsonData);
}
