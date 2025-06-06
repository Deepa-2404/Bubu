const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MySQL connection config (change password if needed)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123', // your MySQL root password or '' if none
  database: 'food_menu',
});

db.connect(err => {
  if (err) {
    console.error('❌ DB connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// API route to get menu data
app.get('/api/menu', (req, res) => {
  const query = "SELECT * FROM menu";
  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching menu:', err);
      return res.status(500).json({ error: 'Database query error' });
    }

    // Transform results to group by category
    const menuByCategory = results.reduce((acc, item) => {
      const category = item.category || 'others';
      if (!acc[category]) acc[category] = [];
      acc[category].push({
        id: item.id,
        name: item.name,
        desc: item.description || '',  // assuming you have description column
        price: item.price,
        img: item.image_url || 'images/default.jpg', // fallback image path
      });
      return acc;
    }, {});

    res.json(menuByCategory);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
