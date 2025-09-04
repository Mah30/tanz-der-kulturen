<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config/connection.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name'], $data['date'], $data['location'], $data['attendees'], $data['status'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields."]);
    exit();
}

$name = $data['name'];
$date = $data['date'];
$location = $data['location'];
$attendees = intval($data['attendees']);
$status = $data['status'];

$db = new Database();
$conn = $db->getConnection();

try {
    // Check for duplicate event (same name and date)
    $checkStmt = $conn->prepare("SELECT id FROM events WHERE name = ? AND date = ?");
    $checkStmt->execute([$name, $date]);
    if ($checkStmt->fetch()) {
        http_response_code(409);
        echo json_encode(["error" => "An event with the same name and date already exists."]);
        exit();
    }

    $stmt = $conn->prepare("INSERT INTO events (name, date, location, attendees, status) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$name, $date, $location, $attendees, $status]);
    $id = $conn->lastInsertId();
    echo json_encode([
        "id" => $id,
        "name" => $name,
        "date" => $date,
        "location" => $location,
        "attendees" => $attendees,
        "status" => $status
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>
