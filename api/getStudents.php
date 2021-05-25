<?php
$dbh = new PDO("mysql:host=localhost;dbname=tableau","root","Miriismail2002");
$sql = " SELECT * FROM tableau ";
$studentsQuery = $dbh->query($sql);
$getStudents = $studentsQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getStudents));
?>
