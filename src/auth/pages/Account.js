import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import * as firebase from 'firebase';

import Login from './Login'

import ReactCalculator from '../../calculator/ReactCalculator';

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
      <View style={Styles.container}>
        <View style={Styles.body}>
          <View style={Styles.accountContaniner}>
            <Text style={Styles.emailText}>{user.email}</Text>
              <Button
                onPress={this.logout.bind(this)}
                style={Styles.buttonDefault}
                textStyle={Styles.buttonDefaultTextDestructive}
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
