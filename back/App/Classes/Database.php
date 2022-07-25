<?php

namespace App\Classes;

class Database
{
    private static $instance = null;
    private static array $OPTIONS = [
        \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
    ];

    private function __construct()
    {
        try {
            self::$instance = new \PDO("mysql:host=" . getenv('DB_SERVER') . ";dbname=" . getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASSWORD'), self::$OPTIONS);
            self::$instance->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $exception) {
            echo $exception->getMessage();
            die;
        }
    }

    /**
     * Singleton to get database instance
     *
     * @return \PDO
     */
    public static function getDatabase(): \PDO
    {
        if (!self::$instance) {
            new DataBase();
        }
        return self::$instance;
    }
}
