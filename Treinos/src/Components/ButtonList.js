import React from 'react';
import {View, Text, StyleSheet} from  'react-native';
import Button from './Button'

const BottonList = props => {

    const {treinos, clicar, exercicios} = props;

    const items = treinos.map((nomeTreino, i) =>{
        let {treino, cor} = nomeTreino;
        


        return  (
                    <Button 
                        first = {i === 0 ? true : false}
                        cor={cor} 
                        nomeTreinos={treinos} 
                        key={treino} 
                        nome={treino} 
                        treino={nomeTreino}
                        exercicios={exercicios[i]}
                        evento={clicar}
                    />
                )
        
    })

    return items;
}

export default BottonList;