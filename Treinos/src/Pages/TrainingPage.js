import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListTitle from  '../Components/ListTitle';
import TitleMenu from '../Components/TitleMenu';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

class TrainingPage extends React.Component{


    findGroups(){

        const nomes = this.props.navigation.state.params.obj.ex;
        const chaves = Object.keys(nomes);

        return chaves ;

    }


    findExercixes(){

        const treinos = this.props.navigation.state.params.obj.ex;

        const exercicios = [];


        for(tr in treinos){
            exercicios.push(treinos[tr]);
        }

        return exercicios

    }

    render(){

        let cor = this.props.navigation.state.params.obj.cor;
        

        return(
            <ScrollView>
                <ListTitle grupos={this.findGroups()} exercicios={this.findExercixes()} cor={cor}/>
            </ScrollView>
            
        )
    }
}

export default TrainingPage;