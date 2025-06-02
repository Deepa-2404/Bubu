const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123', // Leave blank for default XAMPP
  database: 'food_menu'
});

app.get('/api/menu', (req, res) => {
  db.query('SELECT * FROM menu', (err, results) => {
    if (err) {
      console.error('❌ DB error:', err);
      return res.status(500).json({ error: err });
    }

    const menu = {
      breakfast: [],
      lunch: [],
      shakes: [],
      dinner: []
    };

    results.forEach(item => {
      const cat = item.category.toLowerCase();
      if (menu[cat]) {
        const entry = {
          name: item.name,
          price: item.price,
          desc: item.description || '',
          img: item.image_url
        };
        menu[cat].push(entry);
      }
    });

    console.log('📦 MENU FROM DB:\n', JSON.stringify(menu, null, 2)); // Output in terminal
    res.json(menu);
  });
});

app.listen(3000, () => console.log('✅ Server running on http://localhost:3000'));
