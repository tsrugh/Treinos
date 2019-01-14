import React from 'react';
import Exercise from './Exercise';

// Componente responsavel por renderizar os exercicios
const ExerciseList = props => {

    // Desestruturando os exercicios de props
    const { exercicios } = props;

    // Map que percorre os exercicios passados e para exercise os seus respectivos itens
    const elementos = exercicios.map((exr, i) => {
        console.log(exr);
        return <Exercise
                    key={i} 
                    desc={exr.desc} 
                    series={exr.series} 
                    rep={exr.repeticoes} 
                    maq={exr.maquina} />
    });


    return elementos;


}

export default ExerciseList;