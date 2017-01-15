import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import * as firebase from 'firebase';

import AccountContainer from './AccountContainer';
import SignUp from './SignUp';
import NavigationBarRouteMapper from '../components/NavigationBarRouteMapper';

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
      const component = user ? AccountContainer : SignUp;

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
          <View style={styles.body}></View>
        </View>
      )
    }
  }
}

export default AuthApp;
