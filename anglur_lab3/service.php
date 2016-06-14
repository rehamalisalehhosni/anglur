<?php
$con = mysqli_connect("localhost","root","iti","angular");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$userName = $request->userName;
$password = $request->password;
$gender = $request->gender;
$hobbies = $request->hobbies;
$password=md5($password);
$ho=array();
foreach($hobbies as $key => $value){
	array_push($ho,$key);
}
$hobby = implode(",", $ho);
$query="insert into users (name,password,gender,hobbies) values('{$userName}','{$password}','{$gender}','{$hobby}')";
mysqli_query($con,$query);
?>
