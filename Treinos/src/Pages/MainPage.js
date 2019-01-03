import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import ButtonList from '../Components/ButtonList';



class MainPage extends React.Component{

    //fazer a chamada da API para gerar os botoes
     componentDidMount(){

        this.inicializar();


    }

    inicializar(){
        axios
        .get('http://localhost/webservice2/index.php/treinos')
        .then(resposta => {
            this.setState({nomeTreinos: resposta.data});
        });

        // axios
        // .get('http://192.168.1.146/webservice2/index.php/teste/Treino A')
        // .then(resposta =>{
        //     this.setState({exercicios: resposta.data});
        // });

        axios
        .get('http://localhost/webservice2/index.php/todos')
        .then(resposta =>{
            this.setState({exercicios: resposta.data});
        });
        
    }

    getExercises(treino){

        axios
        .get(`http://192.168.1.146/webservice2/index.php/teste/${treino}`)
        .then(resposta =>{
            this.setState({exercicios: resposta.data});
            return resposta.data;
        });


    }



    transformarResposta(){

        const items = this.state.nomeTreinos.map(nome =>{
            return <Text key={nome.treino}>{nome.treino}</Text>
        });

        return items;

    }


    constructor(props){
        super(props);

        this.state = {
            nomeTreinos: [],
            exercicios: {},


        }

    }

    render (){

        return(
            <View>
                <ButtonList 
                    exercicios={this.state.exercicios} 
                    
                    treinos={this.state.nomeTreinos} 
                    
                    clicar={
                    (treinos, nomeTreino) =>{
                        //console.log(nomeTreino);
                        this.getExercises(nomeTreino);
                        this.props.navigation.navigate('Second', treinos);
                    }
                }/>
            </View>
        )

    }

}

export default MainPage;