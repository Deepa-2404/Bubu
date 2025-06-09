<?php
$servername = "localhost";
$username = "root";
$password = "admin123";
$dbname = "food_menu";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM menu";
$result = $conn->query($sql);

echo "<h2>Food Menu</h2><ul>";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<li>";
        echo "<img src='images/" . htmlspecialchars($row["image"]) . "' alt='" . htmlspecialchars($row["name"]) . "' style='width:100px;height:auto;margin-right:10px;vertical-align:middle;'>";
        echo "<strong>" . htmlspecialchars($row["name"]) . "</strong> – ₹" . htmlspecialchars($row["price"]);
        echo "<br>";
        echo "</li>";
    }
} else {
    echo "No items found.";
}

echo "</ul>";

$conn->close();
?>
