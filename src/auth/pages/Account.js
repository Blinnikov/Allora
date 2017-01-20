import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import * as firebase from 'firebase';

import Login from './Login'

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

  async logout() {
    await firebase.auth().signOut();
    this.props.rootNavigator.push({
      component: Login
    })
  }

  render() {
    const { user, loaded } = this.state;
    return (
      <View style={CommonStyles.container}>
        <View style={CommonStyles.body}>
          <View style={CommonStyles.accountContaniner}>
            <Text style={CommonStyles.emailText}>{user.email}</Text>
              <Button
                onPress={this.logout.bind(this)}
                style={CommonStyles.buttonDefault}
                textStyle={CommonStyles.buttonDefaultTextDestructive}
              >
                Logout
              </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Account;
