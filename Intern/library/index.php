<?php
// DB connection settings
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'library_db';

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM books";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Library Book List</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #f9f9f9; }
    .book { background: white; padding: 10px; margin-bottom: 10px; border-left: 5px solid green; display: flex; gap: 15px; align-items: center; }
    .book img { width: 100px; height: auto; border-radius: 5px; }
  </style>
</head>
<body>

<h1>Library Books</h1>

<div id="book-list">
  <?php if ($result->num_rows > 0): ?>
    <?php while($row = $result->fetch_assoc()): ?>
      <div class="book">
        <img src="http://localhost:3000/images/<?= htmlspecialchars($row['image']) ?>" alt="<?= htmlspecialchars($row['title']) ?>">
        <div>
          <h3><?= htmlspecialchars($row['title']) ?></h3>
          <p><strong>Author:</strong> <?= htmlspecialchars($row['author']) ?></p>
          <p><strong>Year:</strong> <?= $row['year'] ?></p>
        </div>
      </div>
    <?php endwhile; ?>
  <?php else: ?>
    <p>No books found.</p>
  <?php endif; ?>
</div>

</body>
</html>

<?php
$conn->close();
?>
