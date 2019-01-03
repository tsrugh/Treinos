import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleMenu = props =>{


return (
    <View style={styles.container}>
        <Text style={styles.texto}>Maq</Text>
        <Text style={[styles.texto, {flex:3}]}>Desc</Text>
        <Text style={styles.texto}>Series</Text>
        <Text style={styles.texto}>Repet</Text>
    </View>
)


}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        //flex: 4,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(163, 169, 173, 0.829)',
    },
    texto:{
        textAlign: 'center',
        flex: 1,
        
    },

});

export default TitleMenu;