<?php


use App\Controllers\CalendarController;

$router->mount('/calendar', function () use ($router) {
    $router->post('/', function () {
        $calendar = new CalendarController();
        $calendar->setNewDate();
    });

    $router->get('/', function () {
        $calendar = new CalendarController();
        $calendar->getDates();
    });
});
