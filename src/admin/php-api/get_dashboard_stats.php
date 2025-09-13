<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/config/connection.php';
$db = new Database();
$conn = $db->getConnection();

// Total Classes
$totalClasses = $conn->query("SELECT COUNT(*) FROM dance_classes")->fetchColumn();
// Total Events
$totalEvents = $conn->query("SELECT COUNT(*) FROM events")->fetchColumn();
// Registered Users (assuming a 'users' table)
$registeredUsers = 0;
if ($conn->query("SHOW TABLES LIKE 'users'")->fetch()) {
  $registeredUsers = $conn->query("SELECT COUNT(*) FROM users")->fetchColumn();
}
// Media Files (assuming a 'media' table)
$mediaFiles = 0;
if ($conn->query("SHOW TABLES LIKE 'media'")->fetch()) {
  $mediaFiles = $conn->query("SELECT COUNT(*) FROM media")->fetchColumn();
}

echo json_encode([
  "totalClasses" => (int)$totalClasses,
  "totalEvents" => (int)$totalEvents,
  "registeredUsers" => (int)$registeredUsers,
  "mediaFiles" => (int)$mediaFiles
]);
