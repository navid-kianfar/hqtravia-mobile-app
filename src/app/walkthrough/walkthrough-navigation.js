import {createStackNavigator} from 'react-navigation-stack';
import WalkThroughMainPage from './pages/main';
import WelcomePage from './pages/welcome';
import LanguagePage from './pages/language';

const OwnerNavigation = createStackNavigator(
  {
    Language: LanguagePage,
    Welcome: WelcomePage,
    Main: {screen: WalkThroughMainPage},
  },
  {initialRouteName: 'Welcome', headerMode: 'none'},
);

export default OwnerNavigation;
