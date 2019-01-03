import React from 'react';
import {View, Text} from 'react-native';
import Title from './Title';
import TitleMenu from './TitleMenu';
import ExerciseList from './ExerciseList';

const ListTitle = props =>{

    const elementos = props.grupos.map((grupo, i) => {
        return (
             <View key={grupo}>     
                <Title cor={props.cor}  titulo={grupo}></Title>
                <TitleMenu/> 
                <ExerciseList key={i} exercicios={props.exercicios[i]}/>
            </View>
            
        )
    })

    return elementos;

}

export default ListTitle;