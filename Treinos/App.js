// Metodos para realizar a navegação entre telas do aplicativo
import {createStackNavigator, createAppContainer} from 'react-navigation';
// Paginas Principais do aplicativo
import TrainingPage from './src/Pages/TrainingPage';
import MainPage from './src/Pages/MainPage'

// Variavel que cria o container com as configurações de navegação
const Main = createStackNavigator({

  //Indicando qual é a primeira tela
  First: MainPage,
  //Indicando a segunda tela e suas configurações  
  Second: {
    screen: TrainingPage,
    navigationOptions: ({navigation}) => {

      // Constante que vai receber o nome do treino para ser o cabeçalho da segunda tela
      const treinoNome = navigation.state.params.obj.tre.treino;

      return ({

        title: treinoNome

      })

    }

  }

});

// Criando o container para fazer a exportação
const App = createAppContainer(Main);

export default App;
