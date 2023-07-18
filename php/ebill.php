<?php

//IT21268076

require'ebillconfig.php';
    $customerID=$_POST['cid'];
    $accountNumber=$_POST['accno'];
    $firstName=$_POST['fname'];
    $lastName=$_POST['lname'];
    $email=$_POST['email'];
    $phonenumber=$_POST['phno'];
    $Password=$_POST['pwd'];
    $confirmPassword=$_POST['rpwd'];
    $gender=$_POST['gender'];
$sql="INSERT INTO e-bill(Customerid,accountno,firstname,lastname,phoneno,password,cpassword,gender)VALUES($customerID,$accountNumber,$firstName,$lastName,$email,$phonenumber,$Password,$confirmPassword,$gender)";
    if($conn->query($sql)){
        echo"inserted successfully";
    }
    else{
        echo"Error:".$conn->error;
    }
    $conn->close();
?>