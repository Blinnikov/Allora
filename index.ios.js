import { AppRegistry } from 'react-native';
import Firebase from './src/firebase/firebase';

import Root from './src/Root';

Firebase.init();

AppRegistry.registerComponent('ReactNativePlayground', () => Root);
