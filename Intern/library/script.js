import { getBooksFromDB } from './config.js';

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooksFromDB();
  const container = document.getElementById('book-list');
  
  books.forEach(book => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${book.title}</h3><p>${book.author} (${book.year})</p>`;
    container.appendChild(div);
  });
});
