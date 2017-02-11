import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { AppState } from 'react-native';
import * as firebase from 'firebase';
import * as Notifications from './services/Notifications';
import RootStack from './navigation/RootStack';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };

    this.getInitialComponent();
  }

  getInitialComponent() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loaded: true
      });

      // TODO: Add splash screen
      if (user) {
        this._goToRoute('MainPage');
      }
    });
  }

  _goToRoute(routeName) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ]
    });
    this.navigator.dispatch(resetAction);
  }

  componentDidMount() {
    Notifications.requestPermissions();
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange(currentAppState) {
    if (currentAppState === 'background') {
      Notifications.schedule();
    }
  }

  render() {
    if (this.state.loaded) {
      return null;
    }

    return (
      <RootStack ref={nav => { this.navigator = nav; }} />
    );
  }
}

export default Root;
