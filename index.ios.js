import { AppRegistry } from 'react-native';
import Firebase from './src/firebase/firebase';

import ReactCalculator from './src/calculator/ReactCalculator';
import GroceryApp from './src/grocery/components/GroceryApp';

Firebase.init();

AppRegistry.registerComponent('ReactNativePlayground', () => GroceryApp);
