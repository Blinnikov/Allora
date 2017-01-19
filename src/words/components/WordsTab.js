import React, { Component } from 'react';
import { Navigator } from 'react-native';

import NavigationBarRouteMapper from './NavigationBarRouteMapper';
import WordList from './WordList';

import NavBarStyles from '../../styles/NavigationBar';

class WordsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: WordList, title: 'Your words'}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        renderScene={(route, navigator) => {
          return React.createElement(route.component, { navigator });
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={NavBarStyles.navBar}
          />
        }
      />
    );
  }
}

export default WordsTab;