import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from 'react-native-elements';
import I18n from 'react-native-i18n';
import * as firebase from 'firebase';
import * as Notifications from '../../services/Notifications';

import PageStyles from './Account.Styles';
import CommonStyles from '../../styles/Common';

class Account extends Component {
  constructor(props) {
    super(props);

    const user = firebase.auth().currentUser || {};
    this.state = {
      user,
    };
  }

  _getRandom() {
    const res = Notifications.getRandomMessage();
    alert(res);
  }

  _goToSettingsPage() {
    const { navigation } = this.props;
    navigation.navigate('Settings');
  }

  async _logout() {
    await firebase.auth().signOut();
  }

  render() {
    const { user } = this.state;
    return (
      <View style={CommonStyles.pageContainer}>
        <Text h4 style={PageStyles.email}>{user.email}</Text>
        <List>
          <ListItem
            title={I18n.t('account.random')}
            leftIcon={{name: 'ios-repeat', type: 'ionicon'}}
            onPress={this._getRandom.bind(this)}
          />
          <ListItem
            title={I18n.t('settings.title')}
            leftIcon={{name: 'ios-settings', type: 'ionicon'}}
            onPress={this._goToSettingsPage.bind(this)}
          />
          <ListItem
            title={I18n.t('account.logout')}
            leftIcon={{name: 'ios-log-out', type: 'ionicon'}}
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
