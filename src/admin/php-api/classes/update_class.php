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

// Get class ID from query string
if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing class ID."]);
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

$names = $data['names'] ?? null;
$instructor = $data['instructor'] ?? null;
$schedule = $data['schedule'] ?? null;
$students = isset($data['students']) ? intval($data['students']) : null;

if (!$names || !$instructor || !$schedule || $students === null) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields."]);
    exit();
}

$db = new Database();
$conn = $db->getConnection();

try {
    $stmt = $conn->prepare("UPDATE dance_classes SET names = ?, instructor = ?, schedule = ?, students = ? WHERE id = ?");
    $stmt->execute([$names, $instructor, $schedule, $students, $id]);
    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
