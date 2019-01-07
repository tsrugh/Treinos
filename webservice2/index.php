<?php
/**
 * Arquivo para criação das rotas da API
 */

 // Importando classes para a transição de dados
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// Importando os arquivos necessarios
require 'vendor/autoload.php';
require './src/crud.php';

//Criando uma instancia de App
$app = new \Slim\App;

// Cirando a url e exibindo o resultado da consulta por determinado treino
$app->get('/teste/{treino}', function (Request $request, Response $response, array $args) {
    
    // Variavel recebe o valor do parametro passado
    $treino = $request->getAttribute('treino');

    // Objeto que recebe a classe Crud
    $conn = new Crud();

    // Exibindo o resultado para o cliente
    echo $conn->buscaPorTreino($treino);
});

// Url que retorna todos os nomes dos treinos
$app->get('/treinos', function (Request $request, Response $response, array $args) {

     // Objeto que recebe a classe Crud
    $conn = new Crud();

    // Exibindo o resultado para o cliente
    echo $conn->nomeTreinos();

});

// Url que retorna e exibe todos os exercicios de cada treino
$app->get('/todos', function (Request $request, Response $response, array $args) {

    // Objeto que recebe a classe Crud
    $conn = new Crud();

    // Exibindo o resultado para o cliente
    echo $conn->buscaGeral();

});

$app->run();
