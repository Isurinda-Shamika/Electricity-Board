
<?php 

//IT21358548_Bandara S.S.A.I.S 

include 'config_contact.php';
?>
<?php
$name=$_POST['name']; 
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['input'];

$query ="INSERT INTO contactus (`name`,`email`,`phone`,`input`)
VALUES('$name','$email','$phone','$message')";  

if($conn->query($query)===TRUE){
    // echo  "New recorded addded";
    
    header('location:' . 'index.html'");
}
else {
    echo "Error inserting records:".$conn->error;
}
?>