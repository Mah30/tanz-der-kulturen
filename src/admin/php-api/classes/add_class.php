
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

 // Allow CORS for all origins (for development)
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
 header("Access-Control-Allow-Headers: Content-Type, Authorization");
 header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config/connection.php';

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);
// Debug: log received data
error_log('Received data: ' . print_r($data, true));

if (!isset($data['names'], $data['instructor'], $data['schedule'], $data['students'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields."]);
    exit();
}

$names = $data['names'];
$instructor = $data['instructor'];
$schedule = $data['schedule'];
$students = intval($data['students']);

$db = new Database();
$conn = $db->getConnection();

try {
    // Check for duplicate class (same name and schedule)
    $checkStmt = $conn->prepare("SELECT id FROM dance_classes WHERE names = ? AND schedule = ?");
    $checkStmt->execute([$names, $schedule]);
    if ($checkStmt->fetch()) {
    http_response_code(409);
    echo json_encode(["error" => "A class with the same name and schedule already exists."]);
    exit();
    }

    $created_at = date('Y-m-d H:i:s');
    $stmt = $conn->prepare("INSERT INTO dance_classes (names, instructor, schedule, students, created_at) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$names, $instructor, $schedule, $students, $created_at]);
    $id = $conn->lastInsertId();
    echo json_encode([
        "id" => $id,
        "names" => $names,
        "instructor" => $instructor,
        "schedule" => $schedule,
        "students" => $students,
        "created_at" => $created_at
    ]);
} catch (PDOException $e) {
    error_log('SQL Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>
