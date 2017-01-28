import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, List, ListItem, Text } from 'react-native-elements';
import I18n from 'react-native-i18n';
import * as firebase from 'firebase';
import * as database from '../../firebase/database';

import Login from '../auth/Login'

import PageStyles from './Account.Styles';
import CommonStyles from '../../styles/Common';

const list = [
  {
    title: 'Appointments',
    icon: 'ios-flag-outline'
  },
  {
    title: 'Trips',
    icon: 'ios-jet-outline'
  },
]

class Account extends Component {
  constructor(props) {
    super(props);

    const user = firebase.auth().currentUser;
    this.state = {
      user,
      loaded: true
    };
  }

  _getRandom() {
    const res = database.getRandomWord();
    alert(`${res.word} - ${res.translation}`);
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
        <Text h4 style={PageStyles.email}>{user.email}</Text>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon, type: 'ionicon'}}
                />
            ))
          }
          <ListItem
            title={'Get random word'}
            leftIcon={{name: 'ios-repeat', type: 'ionicon'}}
            onPress={this._getRandom.bind(this)}
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

export default Account;
