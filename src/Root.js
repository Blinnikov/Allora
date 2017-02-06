import React, { Component } from 'react';
import { AppState, Navigator, PushNotificationIOS } from 'react-native';
import * as firebase from 'firebase';
import * as Notifications from './services/Notifications';
import MainPage from './pages/MainPage';
import Login from './pages/auth/Login';

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

  componentDidMount() {
    this._requestPermissions();
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _requestPermissions() {
    PushNotificationIOS.checkPermissions(permissions => {
      if (!permissions.alert) {
        PushNotificationIOS.requestPermissions();
      }
    });
  }

  _handleAppStateChange(currentAppState) {
    if (currentAppState === 'background') {
      Notifications.schedule();
    }
  }

  render() {
    if(!this.state.component) {
      return null;
    }

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
  }
}

export default Root;
