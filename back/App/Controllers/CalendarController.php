<?php

namespace App\Controllers;

use App\Classes\Database;

class CalendarController
{

    public function getDates()
    {
        try {
            $db = Database::start();
            $stmt = $db->query("SELECT * FROM meetings", \PDO::FETCH_ASSOC);
            $data = [];
            foreach ($stmt->fetchAll() as $meeting) {
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

            $currentTime = new \DateTime();

            $date = date("Y-m-d H:i:s", $reqBody['date'] / 1000);
            $datetime = new \DateTime($date);
            echo $datetime->format(\DateTime::ATOM); // Updated ISO8601
            // var_dump($date);
            die;
            // die(var_dump([
            //     date_default_timezone_get(), date('Y-m-d H:i:s')
            // ]));
            die($date);
            // $currentTime = \DateTime::createFromFormat('U', $date);

            // die(var_dump($currentTime));


            $formattedString = $currentTime->format('c');
            die($formattedString);
            $date = (string)date("Y-m-d H:i:s", $reqBody['date'] / 1000);
            $name = (string)$reqBody['name'];
            $telephone = (string)$reqBody['telephone'];
            $message = (string)$reqBody['message'];

            $db = Database::start();
            $sql = "INSERT INTO meetings (`name`, `tel`, `message`, `date`) VALUES ('$name', '$telephone', '$message', '$date');";
            $test = $db->query($sql);
            echo json_encode($test);
        } catch (\Throwable $tr) {
            http_response_code(400);
            echo $tr->getMessage();
        } finally {
            exit;
        }
    }
}
