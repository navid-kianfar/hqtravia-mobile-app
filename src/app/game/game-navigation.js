import {createStackNavigator} from 'react-navigation-stack';
import MainPageComponent from './pages/main';
import LiveVideoComponent from './pages/live-video';
import QuestionComponent from './pages/question';

const GameNavigation = createStackNavigator(
  {
    Question: {screen: QuestionComponent},
    LiveVideo: {screen: LiveVideoComponent},
    Main: {screen: MainPageComponent},
  },
  {initialRouteName: 'LiveVideo', headerMode: 'none'},
);

export default GameNavigation;
