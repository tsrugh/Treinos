import React from 'react';
import  {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {

    // Desestruturando as variaveis de props
    const {evento, nomeTreinos, exercicios, treino} = props

    // Objeto que contem as informações a serem passadas para outra tela
    const obj ={
        // Objeto treino inteiro (nome do treino e sua cor)
        nomes: nomeTreinos,
        // //passando todos os exercicios de cada treino
        ex: exercicios,
        // Objeto inteiro 
        tre: treino,
        // Cor relacionada ao treino
        cor: props.cor,
    }
    

    // Retornando o Botão
    return(
        // Executando o evento passado, e mandando o objeto para a outra tela
        <TouchableOpacity onPress={() => {evento({obj})}} 
            style={
                [styles.container, 
                {backgroundColor:props.cor}, 
                // Condicionando a margin top
                props.first ? {marginTop: 0} : null]}>

            <Text style={styles.texto}>{props.nome}</Text>
        </TouchableOpacity>
    )

}

// Estilos de cada botão
const styles = StyleSheet.create({
    container:{
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