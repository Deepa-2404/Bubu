const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123', // Your MySQL password (if any)
  database: 'library_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API to get book list
app.get('/api/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
