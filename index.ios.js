import { AppRegistry } from 'react-native';
import Firebase from './src/firebase/firebase';
import './src/localization';

import Root from './src/Root';

Firebase.init();

AppRegistry.registerComponent('ReactNativePlayground', () => Root);
