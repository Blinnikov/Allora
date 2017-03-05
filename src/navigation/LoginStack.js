import { StackNavigator } from 'react-navigation';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

const LoginStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    headerMode: 'none',
  },
);

export default LoginStack;
