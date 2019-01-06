<?php 
require 'config.php';

class Connection{

    private $conn;
    private $sql;

    public function conectar(){

       $host = HOST;
       $dbName = DBNAME;

        $this->conn = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8",USER, PASS);

        return $this->conn;

    }


    public function desconectar (){

        $this->conn = NULL;

    }

    
}

?>