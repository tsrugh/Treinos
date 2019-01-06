<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require './src/crud.php';

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
