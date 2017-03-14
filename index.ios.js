import { AppRegistry } from 'react-native';
import { storage }from 'allora-core';
import './src/localization';

import Root from './src/Root';

/* eslint no-console: 0 */
console.ignoredYellowBox = [
   'Behaviour of screenProps has changed',
];

storage.init();

AppRegistry.registerComponent('Allora', () => Root);
