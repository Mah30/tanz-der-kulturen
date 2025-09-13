<?php
 require_once('db/connection.php');
?>

<?php
session_start();

// Set inactivity timeout (30 minute)
$inactive = 1800; 

if (isset($_SESSION['username'])) {
  if (time()- $_SESSION['last_time']> 1800) {
    header("location:login");
  }
  else {
    $_SESSION['last_time']= time();
  }
}else{
  header("location:login");
}

// Update last activity timestamp
$_SESSION['LAST_ACTIVITY'] = time();

// Prevent session hijacking
if (!isset($_SESSION['CREATED'])) {
    $_SESSION['CREATED'] = time();
} elseif (time() - $_SESSION['CREATED'] > 1800) { 
    // Regenerate session every 30 minutes
    session_regenerate_id(true);
    $_SESSION['CREATED'] = time();
}
?>

