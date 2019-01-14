import React from 'react';
import {ScrollView} from 'react-native';
// Componente que será renderizado
import ListTitle from  '../Components/ListTitle';

// Classe responsavel por renderizar a segunda Tela
class TrainingPage extends React.Component{


    // Função responsavel por criar um vetor com os nomes dos grupos musculares
    findGroups(){

        // Constante que recebe todos os grupos de determinado treino
        const nomes = this.props.navigation.state.params.obj.ex;
        // Constante que recebe um vetor com os nomes dos grupos
        const chaves = Object.keys(nomes);
        
        return chaves ;

    }

    // Função responsavel por agrupar os exercicios de um grupo em vetores, cada grupo com o seu vetor
    findExercixes(){

        // Constante que recebe o objeto com todos os grupos e seus respectivos exercicios
        const treinos = this.props.navigation.state.params.obj.ex;

        // Vetor responsavel por agrupar os exercicios
        const exercicios = [];

        // Percorrendo todos os grupos para separar por vetor
        for(tr in treinos){
            exercicios.push(treinos[tr]);
        }

        return exercicios;

    }

    // Renderizando a segunda tela
    render(){

        // Buscando a cor  
        let cor = this.props.navigation.state.params.obj.cor;
        
        return(
            <ScrollView>
                {/* Elemento responsavel por renderizar todos os elementos da segunda tela */}
                <ListTitle 
                    
                    // Passando o nome dos grupos
                    grupos={this.findGroups()} 
                    // Passando os exercicios
                    exercicios={this.findExercixes()} 
                    cor={cor}/>
            </ScrollView>
            
        )
    }
}

export default TrainingPage;