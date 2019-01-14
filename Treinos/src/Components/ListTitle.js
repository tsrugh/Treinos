import React from 'react';
import { View} from 'react-native';
import Title from './Title';
import TitleMenu from './TitleMenu';
import ExerciseList from './ExerciseList';

// Metodo Responsavel por deixar a primeira letra maiuscula
const capitalizeFirstLetter = string => {
    
    // Retorna a primeira letra 
    return string[0].toUpperCase() + string.slice(1);

}

// Componente responsavel por renderizar os nomes dos grupos e os exercicios
const ListTitle = props => {

    console.log(props.exercicios);

    // Map que percorre os nomes dos grupos 
    const elementos = props.grupos.map((grupo, i) => {

        return (
            <View key={i}>
                {/* Renderizando o title passando a cor e o seu titulo */}
                <Title cor={props.cor} 
                    //Propriedade que define a margin do primeiro item da lista
                    first={i === 0 ? true : false} 
                    key={i} 
                    // Passando o nome do grupo em letra maiuscula para o Titulo poder renderizar  
                    titulo={capitalizeFirstLetter(grupo)}>
                </Title>
                {/* Cabeçalho */}
                <TitleMenu />
                {/* Passando cada exercicio para ser renderizado como um exercicio */}
                <ExerciseList exercicios={props.exercicios[i]} />
            </View>

        )
    })

    return elementos;

}

export default ListTitle;