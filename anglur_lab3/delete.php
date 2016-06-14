<?php
$con = mysqli_connect("localhost","root","iti","angular");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id = $request;

$query="delete from users where id = '{$id}'";
mysqli_query($con,$query);
?>
