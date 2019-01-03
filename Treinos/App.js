/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import MainPage from './src/Pages/MainPage'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TrainingPage from './src/Pages/TrainingPage';



const Main = createStackNavigator({

  First: MainPage,
  Second: {
    screen: TrainingPage,
    navigationOptions: ({navigation}) => {

      const treinoNome = navigation.state.params.obj.tre.treino;

      //console.log(treinoNome);

      return ({
        title: treinoNome
      })

    }

  }


});


const App = createAppContainer(Main);

export default App;
