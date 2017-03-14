import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { authentication } from 'allora-core';
import { List, ListItem, Text } from 'react-native-elements';
import I18n from 'react-native-i18n';

import PageStyles from './Account.Styles';
import CommonStyles from '../../styles/Common';

class Account extends Component {
  constructor(props) {
    super(props);

    const user = authentication.getCurrentUser();
    this.state = {
      user,
    };
  }

  _goToSettingsPage() {
    const { navigation } = this.props;
    navigation.navigate('Settings');
  }

  async _logout() {
    await authentication.logout();
  }

  render() {
    const { user } = this.state;
    return (
      <View style={CommonStyles.pageAltContainer}>
        <Text h4 style={PageStyles.email}>{user.email}</Text>
        <List>
          <ListItem
            title={I18n.t('settings.title')}
            leftIcon={{ name: 'ios-settings', type: 'ionicon' }}
            onPress={this._goToSettingsPage.bind(this)}
          />
          <ListItem
            title={I18n.t('account.logout')}
            leftIcon={{ name: 'ios-log-out', type: 'ionicon' }}
            onPress={this._logout.bind(this)}
          />
        </List>
      </View>
    );
  }
}

Account.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Account;
