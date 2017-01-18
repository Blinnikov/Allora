import { AppRegistry } from 'react-native';
import Firebase from './src/firebase/firebase';

import AuthApp from './src/auth/pages/AuthApp';

Firebase.init();

AppRegistry.registerComponent('ReactNativePlayground', () => AuthApp);
