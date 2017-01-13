import React, { Component } from 'react';
import { AsyncStorage, Navigator, Text, View } from 'react-native';
import * as firebase from 'firebase';

import Account from './Account';
import SignUp from './SignUp';
import Header from '../components/Header';

import styles from '../styles/common-styles';

class AuthApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: null,
      loaded: false
    };

    this.getInitialComponent();
  }

  getInitialComponent() {
    firebase.auth().onAuthStateChanged(user => {
      const component = user ? Account : SignUp;

      this.setState({
        component,
        loaded: true
      })
    })
  }

  render() {
    if(this.state.component) {
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Header text='React Native Firebase Auth' loaded={this.state.loaded} />
          <View style={styles.body}></View>
        </View>
      )
    }
  }
}

export default AuthApp;
