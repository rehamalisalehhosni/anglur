<?php
$con = mysqli_connect("localhost","root","iti","angular");


$query="Select * from products ";
$result=mysqli_query($con,$query);
$rows=array();
while ($row=mysqli_fetch_assoc($result)){
	$rows[]=$row;
}
header('Content-Type: application/json');
echo json_encode($rows);



/*header("Content-type:application/json"); 
echo json_encode($rows);*/
?>
