<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
  <?php
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    echo "<p>First Name: " . $firstName . "</br>Last Name: " . $lastName . "</p>";
  ?>
  </body>
</html>