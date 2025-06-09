const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3001; // changed to match script.js

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123', // or 'admin123' depending on your MySQL setup
  database: 'food_menu',
});

db.connect(err => {
  if (err) {
    console.error('❌ DB connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

app.get('/api/menu', (req, res) => {
  const query = "SELECT * FROM menu";
  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching menu:', err);
      return res.status(500).json({ error: 'Database query error' });
    }

    const menuByCategory = results.reduce((acc, item) => {
      const category = item.category || 'others';
      if (!acc[category]) acc[category] = [];
      acc[category].push({
        id: item.id,
        name: item.name,
        desc: item.description || '',
        price: item.price,
        img: item.image || `images/${item.name.toLowerCase().replace(/\s+/g, '_')}.jpg`,// Fixed this line
      }  );
      return acc;
    }, {});

    res.json(menuByCategory);
  });
} );

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});