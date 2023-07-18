<?php

//IT21268076

$conn=new mysqli("localhost","root","","elec");
if($conn->connect_error){
    die("Connection failed:".$conn->connect error);
}
?>