import { AppRegistry } from 'react-native';
import Firebase from './src/firebase/firebase';

import ReactCalculator from './src/calculator/ReactCalculator';
import GroceryApp from './src/grocery/components/GroceryApp';
import AuthApp from './src/auth/pages/AuthApp';

Firebase.init();

AppRegistry.registerComponent('ReactNativePlayground', () => AuthApp);
