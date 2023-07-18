<!-- IT21268144 | Jayasinghe J.A.M.P -->
<?php
require'Regconfig.php';
  $fname=$_POST['fname'];
	$Lname=$_POST['Lname'];
	$address=$_POST['address'];
	$Accnumber=$_POST['Accnumber'];
	$city=$_POST['city'];
	$province=$_POST['province'];
	$email=$_POST['email'];
	$gender=$_POST['gender'];
	$phone=$_POST['phone'];
	$password=$_POST['password'];
	$cnfrmpassword=$_POST['cnfrmpassword'];
$sql="INSERT INTO registration(Customerid,accountno,firstname,lastname,phoneno,password,cpassword,gender)VALUES($customerID,$accountNumber,$firstName,$lastName,$email,$phonenumber,$Password,$confirmPassword,$gender)";
    if($conn->query($sql)){
        echo "inserted successfully";
    }
    else{
        echo"Error:".$conn->error;
    }
    $conn->close();
?>
