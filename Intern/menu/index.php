<?php
// Change the password below to your MySQL root password.
// If you have no password set, leave it as an empty string "".
$servername = "localhost";
$username = "root";
$password = "";  // <-- Put your MySQL root password here, or "" if none
$dbname = "food_menu";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select all from menu table
$sql = "SELECT * FROM menu";
$result = $conn->query($sql);

// Display the results
echo "<h2>Food Menu</h2><ul>";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<li><strong>" . htmlspecialchars($row["name"]) . "</strong> – ₹" . htmlspecialchars($row["price"]) . "</li>";
    }
} else {
    echo "No items found.";
}

echo "</ul>";

// Close the connection
$conn->close();
?>
