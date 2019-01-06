<?php

    require 'conn.php';


    class Crud {


        private $connObj;
        private $conn;
        private $stmt;

        function buscaGeral(){

            $this->inicializar();

            $sql = 'CALL busca_treino()';
            $this->stmt = $this->conn->prepare($sql);
            $this->stmt->execute();

            $array = array();
            while($linha = $this->stmt->fetch(PDO::FETCH_ASSOC)){

                $array[$linha['treino']][$linha['grupoMuscular']][] = [
                    'desc' => $linha['descricao'],
                    'series' => $linha['series'],
                    'repeticoes' => $linha['repeticoes'],
                    'maquina' => $linha['maquina']
                    
                ];

            }

            return json_encode($array, JSON_UNESCAPED_UNICODE);

        }

        function buscaPorTreino($treino){

            $this->inicializar();
    
            $sql = 'CALL busca_por_treino(?)';
            $this->stmt = $this->conn->prepare($sql);
            $this->stmt->bindParam(1, $treino);
            $this->stmt->execute();
    
            $array = array();
            while($linha = $this->stmt->fetch(PDO::FETCH_ASSOC)){
    
                if(!array_key_exists('erro', $linha)){

                    $array[$linha['treino']][$linha['grupoMuscular']][] = [
                        'desc' => $linha['descricao'],
                        'series' => $linha['series'],
                        'repeticoes' => $linha['repeticoes'],
                        'maquina' => $linha['maquina']
                        
                    ];

                }else{

                    $array = $linha;

                }
            }
    
            return json_encode($array);
    
        }

        

        function inicializar(){

            $this->connObj = new Connection();
            $this->conn = $this->connObj->conectar();


        }

        function nomeTreinos(){

            $this->inicializar();
        
            $sql = 'CALL nome_treinos()';
            $this->stmt = $this->conn->prepare($sql);
            $this->stmt->execute();
    
            $array = array();
            while($linha = $this->stmt->fetch(PDO::FETCH_ASSOC)){
    
                if(!array_key_exists('erro', $linha)){
    
                    $array[] = [
                        'treino' => $linha['nome'],
                        'cor' => $linha['cor']
                    ];
    
                }else{
    
                    $array = $linha;
    
                }
            }
    
            return json_encode($array);
    
        }

    }








    //INSPIRAÇÃO NÃO APAGAR
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
