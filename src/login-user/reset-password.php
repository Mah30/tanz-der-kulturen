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

 

<?php
$token = $_GET['token'] ?? '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $stmt = $connect->prepare("SELECT id FROM users WHERE reset_token = ? AND reset_expires > NOW()");
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        $update = $connect->prepare("UPDATE users SET password = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?");
        $update->bind_param("si", $password, $row['id']);
        $update->execute();
        echo"
          <!-- Modal -->
           
<div class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
  <div class='modal-dialog modal-dialog-centered'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-5' id='exampleModalLabel'>Updated Password</h1>
      </div>
      <div class='modal-body'>
        <h5 class='text-center'>✅ Password updated.</h5>
        <p class='text-center'>You can now <a href='login.php'>log in</a></p>
      </div>
    </div>
  </div>
</div>";
    } else {
        echo "  <!-- Modal -->
           
        <div class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
          <div class='modal-dialog modal-dialog-centered'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>Iwalewa's gallery</h1>
              </div>
              <div class='modal-body'>
                <h5 class='text-center'>❌ Error</h5>
                <p class='Invalid or expired token.</p>
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


</head>
<body>


<!-- Form -->
<form method="POST">
<div class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
  <div class='modal-dialog modal-dialog-centered'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h1 class='modal-title fs-5' id='exampleModalLabel'>Set New Password</h1>
      </div>
      <div class='modal-body'>
        <h5 class='text-center'>Please enter your new password.</h5>
        <div class="mb-3 justify-content-center">
        <div class="input-group">
          <input type="password" id="password" class="form-control" name="password" placeholder="Password" />
           <span class="input-group-text">
             <i class="bi bi-eye-slash" id="togglePassword" style="cursor: pointer;"></i>
           </span>
        </div>
      <button class="btn text-center mt-3" type="submit" style="background-image: linear-gradient(90deg, #00D1B2, #9C27B0)">Reset Password</button>
      </div>
    </div>
  </div>
</div>
  </form>






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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <!--FOR TOGGLE BUTTON ON PASSWORD-->
  <script>
  const togglePassword = document.getElementById('togglePassword');
  const password = document.getElementById('password');

  togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
  });
</script>
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
