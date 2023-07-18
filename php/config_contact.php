
<?php

// IT21358548_Bandara S.S.A.I.S 

$servername = "localhost";
$username="root";
$password="";

$db="Online Bill and Event Reminder";

// Create connection
$conn =new mysqli ($servername,$username,$password,$db);

// Check connection
if ($conn->connect_error) {
    die("connection failed.".$conn->connect_error);
}
echo "conected sucssesful";

?>
