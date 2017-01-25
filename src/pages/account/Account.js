import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import I18n from 'react-native-i18n';
import * as firebase from 'firebase';

import Login from '../auth/Login'

import CommonStyles from '../../styles/Common';

class Account extends Component {
  constructor(props) {
    super(props);

    const user = firebase.auth().currentUser;
    this.state = {
      user,
      loaded: true
    };
  }

  async _logout() {
    await firebase.auth().signOut();
    this.props.rootNavigator.push({
      component: Login
    })
  }

  render() {
    const { user, loaded } = this.state;
    return (
      <View style={CommonStyles.fullHeightContainer}>
        <Text style={CommonStyles.emailText}>{user.email}</Text>
        <Button
          title={I18n.t('account.logout')}
          backgroundColor='transparent'
          onPress={this._logout.bind(this)}
          style={CommonStyles.buttonDefault}
          textStyle={CommonStyles.buttonDefaultTextDestructive}
        />
      </View>
    );
  }
}

export default Account;
