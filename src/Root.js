import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import * as firebase from 'firebase';

import TabbedApp from './TabbedApp';
import Login from './auth/pages/Login';

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
      const component = user ? TabbedApp : Login;

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
        <View style={CommonStyles.container}>
          <View style={CommonStyles.body}></View>
        </View>
      )
    }
  }
}

export default Root;
