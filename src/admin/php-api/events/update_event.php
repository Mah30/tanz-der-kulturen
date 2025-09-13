<?php
// Allow CORS for all origins (for development)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config/connection.php';

// Get event ID from query string
if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing event ID."]);
    exit();
}
$id = intval($_GET['id']);

// Get PUT data
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input data."]);
    exit();
}

$name = $data['name'] ?? null;
$date = $data['date'] ?? null;
$location = $data['location'] ?? null;
$attendees = isset($data['attendees']) ? intval($data['attendees']) : null;
$status = $data['status'] ?? null;

if (!$name || !$date || !$location || $attendees === null || !$status) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields."]);
    exit();
}

$db = new Database();
$conn = $db->getConnection();

try {
    $stmt = $conn->prepare("UPDATE events SET name = ?, date = ?, location = ?, attendees = ?, status = ? WHERE id = ?");
    $stmt->execute([$name, $date, $location, $attendees, $status, $id]);
    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
