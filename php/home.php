<?php

//IT21268076

if(isset($_POST["btnSubmit"])){
    $srch=$_POST["srch"];
    $sql="SELECT * FROM surf";
    if($result=$conn->query($sql)){
        if($result->num_rows>0){
            echo("<table border='1'>");
            while($row=$result->fetch_assoc()){
                echo("<tr");
                echo("<td>".$row[surfName]."</td>");
                echo("<td>".$row[surfdetail]."</td>");
                echo("<tr");
            }
            echo("</table>");
        }else{
            echo"no result";
        }
    }
}