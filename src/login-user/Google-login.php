<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db-config.php'; // Your database configuration

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['email']) || !isset($data['google_id'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

try {
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $googleId = $data['google_id'];
    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);

    // Check if user exists
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email OR google_id = :google_id");
    $stmt->execute(['email' => $email, 'google_id' => $googleId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        // Create new user
        $stmt = $pdo->prepare("INSERT INTO users (email, name, google_id) VALUES (:email, :name, :google_id)");
        $stmt->execute([
            'email' => $email,
            'name' => $name,
            'google_id' => $googleId
        ]);
        $userId = $pdo->lastInsertId();
    } else {
        $userId = $user['id'];
    }

    // Generate token
    $token = bin2hex(random_bytes(32));

    echo json_encode([
        'success' => true,
        'token' => $token,
        'user' => [
            'id' => $userId,
            'email' => $email,
            'name' => $name
        ]
    ]);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database error']);
}