<?php 
/**
 * Arquivo que usa o PDO para fazer a conexão com o banco de dados
 */

//importando o arquivo de configuração
require 'config.php';

//Classe responsavel por fazer as ações de conexão com o banco de dados
class Connection{

    // Variavel que define a conexão com o BD    
    private $conn;

    // Metodo que retorna a conexão aberta
    public function conectar(){

        // Variaveis que recebem as informaçoes de config.php
       $host = HOST;    
       $dbName = DBNAME;

        $this->conn = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8",USER, PASS);

        //retornando a conexão aberta
        return $this->conn;

    }

    // Metodo para fechar a conexão
    public function desconectar (){

        $this->conn = NULL;

    }

}

?>