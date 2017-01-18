import React, { Component } from 'react';
import { Navigator } from 'react-native';

import NavigationBarRouteMapper from './NavigationBarRouteMapper';
import WordList from './WordList';

class WordsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: WordList}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          return React.createElement(route.component, { navigator });
        }}
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }
}

export default WordsTab;
