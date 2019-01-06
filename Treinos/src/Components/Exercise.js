import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Exercise = props =>{

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


const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        //flex: 4,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',

    },
    texto:{
        textAlign: 'center',
        flex: 1,
        
    },

});
