<?php
// require 'google-config.php';

// if (isset($_GET['code'])) {
//     $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
//     $client->setAccessToken($token);

//     $google_oauth = new Google_Service_Oauth2($client);
//     $userInfo = $google_oauth->userinfo->get();

//     session_start();
//     $_SESSION['user_id'] = $userInfo->id;
//     $_SESSION['username'] = $userInfo->email;

//     header("Location: index.php");
//     exit();
// }
?>


<?php
// session_start();
// require 'google-config.php';
// require 'connection.php'; // your database connection file

// if (isset($_GET['code'])) {
//     $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
//     if (isset($token['error'])) {
//     // Handle error
//     echo "Google Login failed: " . htmlspecialchars($token['error']);
//     exit();
//     }
//     $client->setAccessToken($token);

//     $google_oauth = new Google_Service_Oauth2($client);
//     $userInfo = $google_oauth->userinfo->get();

//     $google_id = $userInfo->id;
//     $email = $userInfo->email;
//     $name = $userInfo->name;

//     // Check if user already exists
//     $stmt=mysqli_query($connect, "SELECT id FROM users WHERE google_id = '$google_id' OR email = '$email'");
//     // while ($result=mysqli_fetch_array($stmt)) {
//     //     $id=$result['id'];
//     // }

//     if (mysqli_num_rows($stmt)=== 0) {
//         // User doesn't exist, insert them
//         $stmts = mysqli_query($connect, "INSERT INTO users (google_id, email, name) VALUES ('$google_id', '$email', '$name')");
//     } else {
//         // User exists
//          // Log the user in
//     $_SESSION['user_id'] = $user_id;
//     $_SESSION['username'] = $email;

//     header("Location: index.php");
//     exit();
//     }

   
// }
?>

<?php
session_start();
require_once './google-config.php';
require_once '../db/connection.php';

require_once __DIR__ . '/../vendor/autoload.php'; // Adjust path if needed
use Google\Service\Oauth2 as Google_Service_Oauth2;

if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);

    if (isset($token['error'])) {
        echo "Google Login failed: " . htmlspecialchars($token['error']);
        exit();
    }

    $client->setAccessToken($token);

    $google_oauth = new Google_Service_Oauth2($client);
    $userInfo = $google_oauth->userinfo->get();

    $google_id = $userInfo->id;
    $email = $userInfo->email;
    $name = $userInfo->name;

    // Check if user exists
    $query = "SELECT id FROM users WHERE google_id = ? OR email = ?";
      $stmt = mysqli_prepare($connect, $query);
      mysqli_stmt_bind_param($stmt, "ss", $google_id, $email);
      mysqli_stmt_execute($stmt);
      $result = mysqli_stmt_get_result($stmt);


    if ($result->num_rows === 0) {
        // User doesn't exist, insert them
        $insert = $connect->prepare("INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)");
        $insert->bind_param("sss", $google_id, $email, $name);
        $insert->execute();
        $user_id = $insert->insert_id;
    } else {
        // User exists, get ID
        $user = $result->fetch_assoc();
        $user_id = $user['id'];
    }

    // Start session
    $_SESSION['user_id'] = $user_id;
    $_SESSION['username'] = $email;

    header("Location: ../index");
    exit();
}
?>