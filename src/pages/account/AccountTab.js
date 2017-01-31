import React, { Component } from 'react';
import { Navigator } from 'react-native';
import I18n from 'react-native-i18n';

import NavigationBarRouteMapper from './NavigationBarRouteMapper';
import Account from './Account'

import NavBarStyles from '../../styles/NavigationBar';

class AccountTab extends Component {
  render() {
    return (
      <Navigator
        // TODO: Hide nav bar on the first page
        initialRoute={{
          component: Account,
          title: I18n.t('account.title'),
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
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

export default AccountTab;
