/**
 * 
 */
import React from 'react';
// Componente em que será baseado para montar a lista
import Button from './Button'

// Elemento que será retornado
const BottonList = props => {

    // Pegando as propriedades passadas para poder mandar para outro elemento
    const {treinos, clicar, exercicios} =  props;

    // Constante que recebe uma lista de JSX (Button) 
    const items = treinos.map((nomeTreino, i) =>{
        
        //desestruturando os propriedades
        let {treino, cor} = nomeTreino;

        
        return  (
            // Mandando as informações para o elemento Button
                    <Button 
                        first = {i === 0 ? true : false}
                        // cor que será referenciada em cada treino
                        cor={cor} 
                        // Objeto treino inteiro (nome do treino e sua cor)
                        nomeTreinos={treinos} 
                        // Chave de cada item renderizado
                        key={treino} 
                        // Propriedade que será o titulo do app
                        nome={treino}
                        //Passando o Objeto inteiro de cada iteração
                        treino={nomeTreino}
                        //passando todos os exercicios de cada treino pela sua posição (i)
                        exercicios={exercicios[i]}
                        //Evento ao apertar o botão
                        evento={clicar}
                    />
                )
        
    })

    return items;
}

export default BottonList;