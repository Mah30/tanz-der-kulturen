<?php
include_once '../config/connection.php';


// Allow CORS for all origins (for development)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM dance_classes";
$stmt = $db->prepare($query);
$stmt->execute();

$classes = [];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $classes[] = $row;
}

echo json_encode([
    "success" => true,
    "data" => $classes
]);
?>