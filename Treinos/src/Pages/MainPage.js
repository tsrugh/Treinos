import React from 'react';
import {View, Text} from 'react-native';
// Lib para fazer a requisição http no servidor
import axios from 'axios';
// Elemento que será renderizado na tela
import ButtonList from '../Components/ButtonList';

// Classe que será exportada para exebição
class MainPage extends React.Component{

    // Metodo que é chamado quando um componente é montado
    componentDidMount(){

        // Inicializando os states 
        this.inicializar();

    }

    // Metodo para buscar o conteudo na API
    inicializar(){
        
        // Usando o axios com promises para fazer a requisição http e armazenar os dados no state
        axios
        .get('http://localhost/webservice2/index.php/treinos')
        .then(resposta => {
            this.setState({nomeTreinos: resposta.data});
        });
    
        // Usando o axios com promises para fazer a requisição http e armazenar os dados no state
        axios
        .get('http://localhost/webservice2/index.php/todos')
        .then(resposta =>{
            
            const vet = [];

            // Loop para adicionar todos os objetos vindo da API em um vetor
            for(exr in resposta.data){

                vet.push(resposta.data[exr])

            }

            this.setState({exercicios: vet});

        });
        
    }

    // Metodo construtor para poder inicializar o estado do componente
    constructor(props){
        super(props);

        // Criando os estados do componente
        this.state = {

            nomeTreinos: [],
            exercicios: {},

        }

    }

    // Metodo obrigatório para renderizar os itens na tela
    render (){

        return(
            <View>
                <ButtonList 

                    // Pops que passa os exercicios ao ButtonList
                    exercicios={this.state.exercicios} 
                    
                    // Props que passa os nomes dos treinos ao ButtonList
                    treinos={this.state.nomeTreinos} 
                    
                    // Props que executa o evento de click do elemento Button
                    clicar={
                    (treinos) =>{
                        // Chamando a segunda tela e passando o objeto de que contem os treinos para a mesma
                        this.props.navigation.navigate('Second', treinos);
                    }
                }/>
            </View>
        )

    }

}

export default MainPage;