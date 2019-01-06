import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Title = props => {
    //console.log(props.cor);
    return(
        
        <View style={[{backgroundColor: props.cor}, styles.container, props.first ? {marginTop: 0} : {marginTop: 20}]}>
            <Text style={styles.texto}>{props.titulo}</Text>
        </View>

    )

}

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