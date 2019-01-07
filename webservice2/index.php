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

//
$app = new \Slim\App;
$app->get('/teste/{treino}', function (Request $request, Response $response, array $args) {
    $treino = $request->getAttribute('treino');

    $conn = new Crud();

    echo $conn->buscaPorTreino($treino);
});

$app->get('/treinos', function (Request $request, Response $response, array $args) {

    $conn = new Crud();

    echo $conn->nomeTreinos();

});

$app->get('/todos', function (Request $request, Response $response, array $args) {

    $conn = new Crud();

    echo $conn->buscaGeral();

});

$app->run();
