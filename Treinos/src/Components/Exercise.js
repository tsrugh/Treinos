import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Elemento responsavel por montar cada exercicio
const Exercise = props =>{

    // Desestruturando todos os itens para passar como valor aos elementos Text
    const {desc, series, rep, maq} = props;

    return(
        <View key={desc} style={styles.container}>
            <Text style={[styles.texto, {flex:1}]}>{maq}</Text>
            <Text style={[styles.texto, {flex:3, textAlign:'left', marginLeft: 20}]}>{desc}</Text>
            <Text style={[styles.texto]  }>{series}</Text>
            <Text style={styles.texto}>{rep}</Text>
        </View>
    )

}

export default Exercise;

// Estilos
const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',

    },
    texto:{
        textAlign: 'center',
        flex: 1,
        
    },

});
