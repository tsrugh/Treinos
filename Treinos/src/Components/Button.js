import React from 'react';
import  {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {

    const {evento, nomeTreinos, exercicios, treino} = props

    const obj ={
        nomes: nomeTreinos,
        ex: exercicios,
        tre: treino,
        cor: props.cor,
    }
    

    return(
        <TouchableOpacity onPress={() => {evento({obj})}} style={[styles.container, {backgroundColor:props.cor}, props.first ? {marginTop: 0} : null]}>
            <Text style={styles.texto}>{props.nome}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0, 115, 182, 0.609)s',
        paddingBottom: 20,
        paddingTop: 20,
        marginTop: 10,
        marginBottom: 10

    },
    texto:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 30
    }
})


export default Button;