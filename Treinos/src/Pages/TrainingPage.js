import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListTitle from  '../Components/ListTitle';
import TitleMenu from '../Components/TitleMenu';

class TrainingPage extends React.Component{


    findGroups(){

        const nomes = this.props.navigation.state.params.obj.ex;
        console.log(nomes);
        const gr = [];
        //console.log(nomes);

        for(treino in nomes){
            for(grupos in nomes[treino]){
                gr.push(grupos);
            }
        }
        //console.log(gr);
        return gr;

    }


    findExercixes(){

        const treinos = this.props.navigation.state.params.obj.ex;
        const exercicios = []
        console.log(treinos);
        
        for(treino in treinos){
            for(grupos in treinos[treino]){
                //console.log(treinos[treino][grupos])
                exercicios.push(treinos[treino][grupos]);
            }
        }
        
        //console.log(exercicios);
        return exercicios;

    }

    render(){

        this.findExercixes();
        this.findGroups();


        let cor = this.props.navigation.state.params.obj.cor;
        

        return(
            <ScrollView>
                <ListTitle grupos={this.findGroups()} exercicios={this.findExercixes()} cor={cor}/>
            </ScrollView>
            
        )
    }
}

export default TrainingPage;