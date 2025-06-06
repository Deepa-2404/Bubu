const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',  
  database: 'food_menu'
});


db.connect(err => {
  if (err) {
    console.error(' DB Connection Failed:', err);
    return;
  }
  console.log('Connected to XAMPP MySQL');

  db.query('SELECT * FROM menu', (err, results) => {
    if (err) {
      console.error(' Query Error:', err);
      return;
    }

    console.log('📋 Menu Data:');
    results.forEach(row => {
      console.log(`- ${row.name} [${row.category}] - ₹${row.price}`);
    });

    db.end();
  });
});
