<?php
header("Access-Control-Allow-Origin: https://hamzainperth.github.io");
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

    if (mail($to, $subject, $dataMessage, $headers)) {
        echo json_encode("Merci. Votre message a bien ete envoye.");
    } else {
        echo json_encode("Une erreur s'est produite.");
        http_response_code(400);
    }
} else {
    echo "Impossible de realiser cette action.";
    http_response_code(401);
}