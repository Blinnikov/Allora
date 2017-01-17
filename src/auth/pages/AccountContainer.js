import React, { Component } from 'react';
import { Navigator } from 'react-native';

import NavigationBarRouteMapper from '../components/NavigationBarRouteMapper';
import Account from './Account';

class AccountContainer extends Component {
  render() {
    const { rootNavigator } = this.props;
    return (
      <Navigator
        initialRoute={{component: Account}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator, rootNavigator });
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

export default AccountContainer;
