import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import * as firebase from 'firebase';

import Login from './Login'

import ReactCalculator from '../../calculator/ReactCalculator';
import GroceryApp from '../../grocery/components/GroceryApp';

import Styles from '../../Styles';

class Account extends Component {
  constructor(props) {
    super(props);

    const user = firebase.auth().currentUser;
    console.log(user);
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

  goToCalcApp() {
    this.props.navigator.push({
      component: ReactCalculator,
      title: 'Calculator'
    })
  }

  goToGroceryApp() {
    this.props.navigator.push({
      component: GroceryApp,
      title: 'Grocery List'
    })
  }

  render() {
    const { user, loaded } = this.state;
    return (
      <View style={Styles.container}>
        <View style={Styles.body}>
          <View style={pageStyles.emailContaniner}>
            <Text style={pageStyles.emailText}>{user.email}</Text>
          </View>
          <View style={Styles.buttonsRow}>
            <Button
              onPress={this.goToCalcApp.bind(this)}
              style={Styles.buttonPrimary}
            >
              <Text style={Styles.buttonPrimaryText}>Calculator</Text>
            </Button>
            <Button
              onPress={this.goToGroceryApp.bind(this)}
              style={Styles.buttonPrimary}
              textStyle={Styles.buttonPrimaryText}
            >
              <Text style={Styles.buttonPrimaryText}>Grocery</Text>
            </Button>
          </View>
          <Button
            onPress={this.logout.bind(this)}
            style={Styles.buttonDefault}
            textStyle={Styles.buttonDefaultTextDestructive}
          >
            Logout
          </Button>
        </View>
      </View>
    );
  }
}

const pageStyles = StyleSheet.create({
  emailContaniner: {
    padding: 20
  },
  emailText: {
    fontSize: 18
  }
})

export default Account;
