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

        axios
        .get('http://localhost/webservice2/index.php/todos')
        .then(resposta =>{
            const vet = [];
            for(exr in resposta.data){
                vet.push(resposta.data[exr])
            }
            this.setState({exercicios: vet});
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
                    (treinos) =>{
                        this.props.navigation.navigate('Second', treinos);
                    }
                }/>
            </View>
        )

    }

}

export default MainPage;