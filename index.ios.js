import { AppRegistry } from 'react-native';
import { storage }from 'allora-core';
import './src/localization';
import Root from './src/Root';

storage.init();

AppRegistry.registerComponent('Allora', () => Root);
