import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import Header from '../components/Header';
import Button from '../components/Button';
import Login from './Login'

import styles from '../styles/common-styles';

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
    this.props.navigator.push({
      component: Login
    })
  }

  render() {
    const { user, loaded } = this.state;
    return (
      <View style={styles.container}>
        <Header text='Account' loaded={loaded} />
        <View style={styles.body}>
          <View style={pageStyles.emailContaniner}>
            <Text style={pageStyles.emailText}>{user.email}</Text>
          </View>
          <Button
            text='Logout'
            onPress={this.logout.bind(this)}
            buttonStyles={styles.primaryButton}
            buttonTextStyles={styles.primaryButtonText}
          />
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
