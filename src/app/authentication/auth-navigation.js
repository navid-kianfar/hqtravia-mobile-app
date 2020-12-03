import {createStackNavigator} from 'react-navigation-stack';
import EnterPhonePageComponent from './pages/enter-phone';
import VerifyPhonePageComponent from './pages/verify-phone';
import UpdateProfilePage from './pages/update-profile';

const Root = createStackNavigator(
  {
    EnterPhone: {screen: EnterPhonePageComponent},
    VerifyPhone: {screen: VerifyPhonePageComponent},
    UpdateProfile: {screen: UpdateProfilePage},
  },
  {initialRouteName: 'EnterPhone', headerMode: 'none'},
);

export default Root;
