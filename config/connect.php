<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "genius_teste";

$conn = new PDO('mysql:host=localhost; dbname=genius_teste', $user, $pass);


try {
    $conn = new PDO('mysql:host=localhost; dbname=genius_teste', $user, $pass);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
      echo 'ERROR: ' . $e->getMessage();
  }
  

?>