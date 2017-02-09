import { AppRegistry } from 'react-native';
import Firebase from './src/firebase/firebase';
import './src/localization';

import Root from './src/Root';

/* eslint no-console: 0 */
console.ignoredYellowBox = [
   'Behaviour of screenProps has changed',
];

Firebase.init();

AppRegistry.registerComponent('Allora', () => Root);
