import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';

import ReactCalculator from './src/calculator/ReactCalculator';
import GroceryApp from './src/grocery/components/GroceryApp';

const config = {
  apiKey: "AIzaSyAFYZpU99gMCgoYL8dMsp_iTupy1yq7lo4",
  authDomain: "reactnativeplayground-a29b4.firebaseapp.com",
  databaseURL: "https://reactnativeplayground-a29b4.firebaseio.com",
  storageBucket: "reactnativeplayground-a29b4.appspot.com",
  messagingSenderId: "260721422581"
};
const firebaseApp = firebase.initializeApp(config);

AppRegistry.registerComponent('ReactNativePlayground', () => GroceryApp);

/* import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativePlayground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativePlayground', () => ReactNativePlayground); */
