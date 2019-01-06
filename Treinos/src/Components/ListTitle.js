import React from 'react';
import {View, Text} from 'react-native';
import Title from './Title';
import TitleMenu from './TitleMenu';
import ExerciseList from './ExerciseList';
//import {capitalizeFirstLetter} from '../Utils/CapitalizeFirstLetter';

const capitalizeFirstLetter = string => {

    return string[0].toUpperCase() + string.slice(1);

}

const ListTitle = props =>{
    
    const elementos = props.grupos.map((grupo, i) => {
        
        console.log(props.exercicios)
        return (
             <View key={i}>     
                <Title cor={props.cor} first={ i === 0 ? true : false } key={i} titulo={capitalizeFirstLetter(grupo)}></Title>
                <TitleMenu /> 
                <ExerciseList exercicios={props.exercicios[i]}/>
            </View>
            
        )
    })

    return elementos;

}

export default ListTitle;