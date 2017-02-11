import { StackNavigator } from 'react-navigation';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Tabs from './Tabs';

const RootStack = StackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  MainPage: {
    screen: Tabs
  }
}, {
  headerMode: 'none',
});

export default RootStack;
