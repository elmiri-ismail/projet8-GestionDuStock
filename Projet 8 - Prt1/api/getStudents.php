<?php
$dbh = new PDO("mysql:host=localhost;dbname=tableaux","root","Miriismail2002");
$sql = " SELECT * FROM exproduit ";
$studentsQuery = $dbh->query($sql);
$getStudents = $studentsQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getStudents));
?>
