import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Exercise from './Exercise';

const ExerciseList = props => {

    const {exercicios} = props;

    
    //console.log("aush");
    const elementos = exercicios.map((exr, i) =>{
        //console.log();
        return <Exercise key={i} desc={exr.desc} series={exr.series} rep={exr.repeticoes} maq={exr.maquina}  />
    });
    //console.log(elementos);

    return elementos;


}

export default ExerciseList;