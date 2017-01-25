import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import * as firebase from 'firebase';

import MainPage from './pages/MainPage';
import Login from './pages/auth/Login';

import CommonStyles from './styles/Common';

class Root extends Component {
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
      const component = user ? MainPage : Login;

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
        <View>
        </View>
      )
    }
  }
}

export default Root;
