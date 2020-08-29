<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$firstname = htmlspecialchars($_POST['firstname']);
$lastname = htmlspecialchars($_POST['lastname']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $ip = $_SERVER['SERVER_ADDR'];
    $date = date('h:m d/m/Y');
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $fromPage = $_SERVER['HTTP_REFERER'];
    $to = 'chikhi.h@gmail.com';

    $dataMessage = "
Message : $message

Nom : $lastname
Prenom : $firstname
Email : $email
Phone : $phone

User agent : $userAgent
From page : $fromPage
Date et heure : $date
IP : $ip
";


    $headers = 'X-Mailer: PHP/' . phpversion();

    echo mail($to, $subject, $dataMessage) ? json_encode("good") : json_encode("not good");
} else {
    echo "Cannot.";
}