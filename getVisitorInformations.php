<?php

$date = new DateTime();
$time = $date->format('Y-m-d H:i:s');

$newVisitor['ip'] =  $_SERVER['REMOTE_ADDR'];
$newVisitor['browser'] = $_SERVER['HTTP_USER_AGENT'];
$newVisitor['referrer'] = $_SERVER['HTTP_REFERER'];

$database = file_get_contents('../secret/visitor_infos.json');
$database = json_decode($database);
$database->{ $time } = $newVisitor;

$database = json_encode($database, JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT);
file_put_contents('../secret/visitor_infos.json', $database);

header('Location: https://hamzainperth.github.io');
exit();