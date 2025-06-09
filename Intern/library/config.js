// config.js
export async function getBooksFromDB() {
  const response = await fetch("http://localhost:3000/api/books");
  const data = await response.json();
  return data;
}
