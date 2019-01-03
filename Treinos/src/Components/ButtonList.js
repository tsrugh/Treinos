import React from 'react';
import {View, Text, StyleSheet} from  'react-native';
import Button from './Button'

const BottonList = props => {

    const {treinos, clicar, exercicios} = props;

    const items = treinos.map(nomeTreino =>{
        let {treino, cor} = nomeTreino;
        //console.log(treino);
        return  (
                    <Button 
                        cor={cor} 
                        nomeTreinos={treinos} 
                        key={treino} 
                        nome={treino} 
                        treino={nomeTreino}
                        exercicios={exercicios} 
                        evento={clicar}
                    />
                )
        
    })

    return items;
}

export default BottonList;