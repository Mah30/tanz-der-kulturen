<?php
include_once '../config/database.php';

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

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