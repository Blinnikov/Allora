import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import * as firebase from 'firebase';

import Styles from './Styles';

class Login extends Component {
  async signUp(login, password) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(login, password);
      alert('Account created');

      // Navigate to home page, the user is auto logged in
    } catch(error) {
      alert(error.toString());
      console.log(error.toString());
    }
  }

  async signIn(login, password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(login, password);
      alert('Logged In');

      // Navigate to Home page
    } catch(error) {
      alert(error.toString());
    }
  }

  async signOut() {
    try {
      await firebase.auth().signOut();

      // Navigate to Login page
    } catch(error) {
      alert(error.toString());
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Button
          onPress={() => this.signUp('igor.blinnikov1@gmail.com', 'password')}
          style={Styles.buttons}
          textStyle={Styles.buttonsText}
        >
          Sign Up
        </Button>
      </View>
    );
  }
};

export default Login;
