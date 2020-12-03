import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WalkThroughStack from './app/walkthrough/walkthrough-navigation';
import AuthStack from './app/authentication/auth-navigation';
import GameStack from './app/game/game-navigation';
import MainStack from './app/main/main-navigation';

const Root = createAppContainer(
  createSwitchNavigator(
    {
      WalkThroughStack: WalkThroughStack,
      AuthStack: AuthStack,
      GameStack: GameStack,
      MainStack: MainStack,
    },
    {initialRouteName: 'WalkThroughStack'},
  ),
);

export default Root;
