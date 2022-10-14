<?php

namespace App\Controllers;

use \Spatie\CalendarLinks\Link;
use App\Classes\Database;
use \Google\Client;
use \Google\Service\Calendar;

class CalendarController
{

    public function getDates()
    {
        try {
            $db = Database::start();
            $stmt = $db->query("SELECT * FROM meetings", \PDO::FETCH_ASSOC);
            $data = [];

            foreach ($stmt->fetchAll() as $meeting) {
                $datetime = new \DateTime($meeting['date']);
                $meeting['date'] = $datetime->format(\DateTime::ATOM); // Updated ISO8601
                array_push($data, $meeting);
            }
            echo json_encode($data, JSON_PRETTY_PRINT);
        } catch (\Throwable $tr) {
            http_response_code(400);
            echo $tr->getMessage();
        } finally {
            exit;
        }
    }

    public function setNewDate()
    {
        try {
            $reqBody = json_decode(file_get_contents('php://input'), true);
            if (!$reqBody) {
                throw new \Exception('Request body empty. (json format required)');
            }

            $date = date("Y-m-d H:i:s", $reqBody['date'] / 1000);

            $datetime = new \DateTime($date);
            $date = $datetime->format(\DateTime::ATOM); // Updated ISO8601
            $name = (string)$reqBody['name'];
            $telephone = (string)$reqBody['telephone'];
            $message = (string)$reqBody['message'];

            $db = Database::start();
            $sql = "INSERT INTO meetings (`name`, `tel`, `message`, `date`) VALUES ('$name', '$telephone', '$message', '$date');";
            $db->query($sql);

            $credentialsPath =  dirname(__DIR__) . '/../service-account-credentials.json';
            $calendarId = getenv('GOOGLE_CALENDAR_ID');

            if (file_exists($credentialsPath) && $calendarId) {

                $client = new Client();
                $client->setApplicationName('test');
                $client->setScopes([Calendar::CALENDAR]);
                $client->setAuthConfig($credentialsPath);
                $client->setAccessType('offline');
                $client->getAccessToken();
                $client->getRefreshToken();
                $service = new Calendar($client);

                $currentDate = date("d/m/Y h:m:s");
                $event = new \Google\Service\Calendar\Event([
                    'summary' => "Call $name",
                    'location' => '',
                    'description' => "Date: $currentDate \n Name : $name \n Message : $message \n Phone : $telephone",
                    'start' => array(
                        'dateTime' => $date,
                        'timeZone' => getenv('TIMEZONE'),
                    ),
                    'end' => array(
                        'dateTime' => $date, // + 1h
                        'timeZone' => getenv('TIMEZONE'),
                    ),
                    'recurrence' => array(
                        'RRULE:FREQ=DAILY;COUNT=2'
                    ),
                    'reminders' => array(
                        'useDefault' => FALSE,
                        'overrides' => array(
                            array('method' => 'email', 'minutes' => 24 * 60),
                            array('method' => 'popup', 'minutes' => 10),
                        ),
                    ),
                ]);

                $insertedEvent = $service->events->insert($calendarId, $event);

                $linkForUser = Link::create(
                    "Call with Hamza",
                    $datetime,
                    $datetime // +1h
                )->description($message)->google();
                echo   json_encode($linkForUser);
            } else {
                throw new \Exception('Auth file not found.');
            }
        } catch (\Throwable $tr) {
            http_response_code(400);
            echo $tr->getMessage();
        } finally {
            exit;
        }
    }
}
