<?php

/**
 * Arquivo responsavel por realizar as tarefas do banco de dodos
 * tais como, select, update, insert e delete
 */

    // Importando o arquivo de conexão
    require 'conn.php';

    // Classe responsavel por administrar as ações no banco de dados
    class Crud {

        // Variaveis de inicialização do banco
        private $connObj;
        private $conn;

        // Vriavel que recebe as ações do banco de dados
        private $stmt;

        // Metodo para realizar a conexão com o banco de dados
        function inicializar(){

            $this->connObj = new Connection();
            $this->conn = $this->connObj->conectar();

        }
        // Metodo para buscar todos os treinos
        function buscaGeral(){

            //inicializando a conexão com o banco atraves do metodo inicializar
            $this->inicializar();

            // String que recebe o comado para ser executado no banco
            $sql = 'CALL busca_treino()';

            // Variavel que irá receber os resultados
            $array = array();

            // Fazendo a execução do comando no banco de dados
            $this->stmt = $this->conn->prepare($sql);
            $this->stmt->execute();

            // Loop para percorrer os resultados trazidos do banco
            while($linha = $this->stmt->fetch(PDO::FETCH_ASSOC)){

                // Criando a estrutura para montar a resposta em JSON que vem do banco
                $array[$linha['treino']][$linha['grupoMuscular']][] = [
                    'desc' => $linha['descricao'],
                    'series' => $linha['series'],
                    'repeticoes' => $linha['repeticoes'],
                    'maquina' => $linha['maquina']
                    
                ];

            } // fim while

            // Transformando o array em JSON e retornando o conteudo para o lado cliente
            return json_encode($array, JSON_UNESCAPED_UNICODE);

        } // fim busca geral

        // Metodo para buscar um treino especifico
        function buscaPorTreino($treino){

            //inicializando a conexão com o banco atraves do metodo inicializar
            $this->inicializar();
    
            // String que recebe o comado para ser executado no banco
            $sql = 'CALL busca_por_treino(?)';
            
            // Variavel que irá receber os resultados
            $array = array();

            // Fazendo a execução do comando no banco de dados
            $this->stmt = $this->conn->prepare($sql);
            $this->stmt->bindParam(1, $treino);
            $this->stmt->execute();
    
            // Loop para percorrer os resultados trazidos do banco
            while($linha = $this->stmt->fetch(PDO::FETCH_ASSOC)){
    
                // Verificando se existe a chave 'erro' na resposta do banco, caso não seja encontrado nenhum treino
                if(!array_key_exists('erro', $linha)){

                    // Criando a estrutura para montar a resposta em JSON que vem do banco
                    $array[$linha['treino']][$linha['grupoMuscular']][] = [
                        'desc' => $linha['descricao'],
                        'series' => $linha['series'],
                        'repeticoes' => $linha['repeticoes'],
                        'maquina' => $linha['maquina']
                        
                    ];
                
                // Caso não encontre o treino retonará a linha de erro
                }else{

                    $array = $linha;

                }
            }
    
            // Transformando o array em JSON e retornando o conteudo para o lado cliente
            return json_encode($array, JSON_UNESCAPED_UNICODE);
    
        }

        // Metodo para retornar os nomes dos treinos
        function nomeTreinos(){

            //inicializando a conexão com o banco atraves do metodo inicializar
            $this->inicializar();
            
            // String que recebe o comado para ser executado no banco
            $sql = 'CALL nome_treinos()';

            // Variavel que irá receber os resultados
            $array = array();

            // Fazendo a execução do comando no banco de dados
            $this->stmt = $this->conn->prepare($sql);
            $this->stmt->execute();
    
            // Loop para percorrer os resultados trazidos do banco
            while($linha = $this->stmt->fetch(PDO::FETCH_ASSOC)){
    
                // Verificando se existe a chave 'erro' na resposta do banco, caso não seja encontrado nenhum treino
                if(!array_key_exists('erro', $linha)){
                    
                    // Criando a estrutura para montar a resposta em JSON que vem do banco
                    $array[] = [
                        'treino' => $linha['nome'],
                        'cor' => $linha['cor']
                    ];
    
                }
                // Caso não encontre o treino retonará a linha de erro
                else{
    
                    $array = $linha;

                }
            }
    
            // Transformando o array em JSON e retornando o conteudo para o lado cliente
            return json_encode($array);
    
        }

    }








    //***** */INSPIRAÇÃO********* NÃO APAGAR
    function buscar($treino){

        $conn = mysqli_connect('localhost', 'root', '', 'academia');
        mysqli_set_charset($conn, "UTF8");

        $query = "SELECT e.descricao, e.series, e.repeticoes, m.maquina, g.nome as 'Grupo Muscular', t.nome as treino
        FROM exercicios as e
        INNER JOIN maquinas m
        ON m.idMaquina = e.id_maquina
        INNER JOIN grupos g
        ON g.idGrupo = e.id_grupo
        INNER JOIN treinos t
        ON t.idTreino = e.id_treino; ";


        //$query = "CALL busca_treino()";


        $result = mysqli_query($conn, $query);
        
        $array = array();


        while($row = mysqli_fetch_array($result)){

            $array[] = $row;

        }

        $objeto = array();

        $aux = '';

        $tam = sizeof($array);
        
        $obj = array();



        $teste = $array[0];

        $var = array();
        $aux = '';

        for($i = 0; $i < sizeof($array); $i++){

                                 
                   $var[$array[$i][5]][$array[$i][4]][] = [
                            'desc' => $array[$i][0],
                            'ser' => $array[$i][1],
                            'rept' => $array[$i][2],
                            'maq' => $array[$i][3] 
                        ];
        
        }
        


        echo json_encode($var, JSON_UNESCAPED_UNICODE);


    }

?>
