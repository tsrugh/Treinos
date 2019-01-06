import React from 'react';
import Exercise from './Exercise';

const ExerciseList = props => {

    const { exercicios } = props;
    console.log(exercicios)
    
    const elementos = exercicios.map((exr, i) => {
        console.log(exr);
        return <Exercise key={i} desc={exr.desc} series={exr.series} rep={exr.repeticoes} maq={exr.maquina} />
    });


    return elementos;


}

export default ExerciseList;