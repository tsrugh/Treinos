import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Elemento responsavel por renderizar o nome do grupo
const Title = props => {

    return(
        
        <View style={[{
                backgroundColor: props.cor}, 
                styles.container, 
                //Estilo conficional para a margin do elemento inicial
                props.first ? {marginTop: 0} : {marginTop: 20}]}>
                {/* passando o nome do grupo para ser renderizado*/}
            <Text style={styles.texto}>{props.titulo}</Text>
        </View>

    )

}

// Estilos
const styles = StyleSheet.create({

    container:{
        paddingBottom: 5,
        paddingTop: 5,
        
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold'
    }

})

export default Title;