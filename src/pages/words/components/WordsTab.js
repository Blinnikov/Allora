import React, { Component } from 'react';
import { Navigator } from 'react-native';
import I18n from 'react-native-i18n';
import EventEmitter from 'events';

import NavigationBarRouteMapper from './NavigationBarRouteMapper';
import WordList from './WordList';

import NavBarStyles from '../../../styles/NavigationBar';

class WordsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const emitter = new EventEmitter();
    const mapper = NavigationBarRouteMapper(emitter);
    return (
      <Navigator
        initialRoute={{
          component: WordList,
          title: I18n.t('words.list.title'),
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        renderScene={(route, navigator) => {
          if (route.readyComponent) {
            return route.component;
          }

          return React.createElement(route.component, { navigator, emitter });
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={mapper}
            style={NavBarStyles.navBar}
          />
        }
      />
    );
  }
}

export default WordsTab;
