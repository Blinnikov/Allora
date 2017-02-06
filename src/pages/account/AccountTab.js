import React, { PropTypes } from 'react';
import { Navigator } from 'react-native';
import I18n from 'react-native-i18n';

import NavigationBarRouteMapper from './NavigationBarRouteMapper';
import Account from './Account';

import NavBarStyles from '../../styles/NavigationBar';

const AccountTab = ({rootNavigator}) => (
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
      return React.createElement(route.component, { navigator, rootNavigator });
    }}
    navigationBar={
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={NavBarStyles.navBar}
      />
    }
  />
);

AccountTab.propTypes = {
  rootNavigator: PropTypes.object.isRequired
}

export default AccountTab;
