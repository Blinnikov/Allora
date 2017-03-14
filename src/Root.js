import React, { Component } from 'react';
import { ActivityIndicator, AppState } from 'react-native';
import { authentication } from 'allora-core';
import * as Notifications from './services/Notifications';
import LoginStack from './navigation/LoginStack';
import Tabs from './navigation/Tabs';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      loaded: false
    };

    this._checkAuthentication();
  }

  _checkAuthentication() {
    authentication.onChange(user => {
      this.setState({
        loaded: true,
        authenticated: !!user,
      });
    });
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
    if (!this.state.loaded) {
      return <ActivityIndicator />;
    }

    if (this.state.authenticated) {
      return (
        <Tabs />
      );
    } else {
      return (
        <LoginStack />
      );
    }
  }
}

export default Root;
