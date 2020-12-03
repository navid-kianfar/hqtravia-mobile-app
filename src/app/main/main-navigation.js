import {createStackNavigator} from 'react-navigation-stack';
import MainPageComponent from './pages/main';
import GameInfo from './components/game-info';
import PowerUp from './components/power-up';

const MainNavigation = createStackNavigator(
  {
    PowerUp: {screen: PowerUp},
    GameInfo: {screen: GameInfo},
    Main: {screen: MainPageComponent},
  },
  {initialRouteName: 'Main', headerMode: 'none'},
);

export default MainNavigation;
