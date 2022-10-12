<?php

require __DIR__ . '/../vendor/autoload.php';

// DOTENV
$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__ . '/..');
$dotenv->load();

// CONFIG
header('Access-Control-Allow-Origin:' . getenv('CLIENT', 'WHATEHER'));
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET,POST,OPTION');
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json; charset=utf-8');
date_default_timezone_set('America/New_York');
// date_default_timezone_set(getenv('TIMEZONE', 'Europe/Paris'));

// ROUTER
$router = new \Bramus\Router\Router();
require __DIR__ . '/../router.php';
$router->set404('(/.*)?', function () {
    http_response_code(404);
    echo json_encode(['message' => 'This page does not exist.']);
    exit;
});

$router->run();
