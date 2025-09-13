<?php
require '../db/connection.php';
require '../vendor/autoload.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Offcanvas Navbar</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <!-- Boostrap icon-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <!-- Google fonts -->
 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@300&family=PT+Sans+Narrow&display=swap" rel="stylesheet">
</head>



<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $stmt = $connect->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $token = bin2hex(random_bytes(32));
        $expires = date("Y-m-d H:i:s", strtotime("+1 hour"));

        $update = $connect->prepare("UPDATE users SET reset_token = ?, reset_expires = ? WHERE email = ?");
        $update->bind_param("sss", $token, $expires, $email);
        $update->execute();

        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'imouduerua@gmail.com';
            $mail->Password   = 'uyhw wfou xaqk rmjp'; // Gmail App Password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;


            $mail->setFrom('imouduerua@gmail.com', 'iwalewa');
            $mail->addAddress($email);
            $mail->isHTML(true);
            $mail->Subject = 'Reset Your Password';
            $mail->Body    = "Click <a href='http://localhost/iwalewa/reset-password.php?token=$token'>here</a> to reset your password.";
            $mail->send();
            // echo "✅ Check your email for a reset link.";
            echo "
            <!-- Modal -->
           
<div class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
  <div class='modal-dialog modal-dialog-centered'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-5' id='exampleModalLabel'>Iwalewa's gallery</h1>
      </div>
      <div class='modal-body'>
        <h5 class='text-center'>✅ Check your email for a reset link.</h5>
        <p class='text-center'>If you don't see it, check your spam folder.</p>
          <div class='d-grid gap-2'>
            <a href='login' class='btn btn-primary' type='submit' style='background-image: linear-gradient(90deg, #00D1B2, #9C27B0)'>Ok.</a>
          </div>
      </div>
    </div>
  </div>
</div>";
        } catch (Exception $e) {
            // echo "❌ Email could not be sent. Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "  <!-- Modal -->
           
<div class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
  <div class='modal-dialog modal-dialog-centered'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-5' id='exampleModalLabel'>Iwalewa's gallery</h1>
      </div>
      <div class='modal-body'>
        <h5 class='text-center'>❌ Email account not found.</h5>
        <p class='text-center'>Check and try again.</p>
          <div class='d-grid gap-2'>
            <a href='login' class='btn btn-primary' type='submit' style='background-image: linear-gradient(90deg, #00D1B2, #9C27B0)'>Ok.</a>
          </div>
      </div>
    </div>
  </div>
</div>";
    }
}
?>
<body>



<?php
// Some condition to determine when to show the modal
$showModal = true;

if ($showModal) {
    echo '
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
        myModal.show();
    });
    </script>
    ';
}
?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  // Enable mobile click toggle for dropdowns
  document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
      const toggleLink = dropdown.querySelector('.dropdown-toggle');

      toggleLink.addEventListener('click', function (e) {
        const isMobile = window.innerWidth < 992;
        if (isMobile) {
          e.preventDefault();
          const dropdownMenu = dropdown.querySelector('.dropdown-menu');
          dropdownMenu.classList.toggle('show');
        }
      });

      // Close the dropdown if clicked outside
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
          const menu = dropdown.querySelector('.dropdown-menu');
          menu.classList.remove('show');
        }
      });
    });
  });
</script>
  <script type="text/javascript">
    const D= new Date();
    document.getElementById("demo").innerHTML= D.getFullYear();
  </script>
</div>
</body>
</html>
