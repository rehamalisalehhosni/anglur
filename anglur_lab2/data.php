<?php
$con = mysqli_connect("localhost","root","iti","angular");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id = $request;
$query="select * from users where id = '{$id}'";
$result=mysqli_query($con,$query);
$row=mysqli_fetch_array($result);

echo json_encode($row);


?>
