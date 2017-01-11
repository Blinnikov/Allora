import React, { Component } from 'react';
import { View, Text, ListView, AlertIOS } from 'react-native';
import StatusBar from './StatusBar';
import ListItem from './ListItem';
import ActionButton from './ActionButton';
import * as firebase from 'firebase';

import styles from '../styles';

const config = {
  apiKey: "AIzaSyAFYZpU99gMCgoYL8dMsp_iTupy1yq7lo4",
  authDomain: "reactnativeplayground-a29b4.firebaseapp.com",
  databaseURL: "https://reactnativeplayground-a29b4.firebaseio.com",
  storageBucket: "reactnativeplayground-a29b4.appspot.com",
  messagingSenderId: "260721422581"
};
const firebaseApp = firebase.initializeApp(config);

class GroceryApp extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = firebaseApp.database().ref().child('items');

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount() {
    this._listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
        />
        <ActionButton
          title="Add"
          onPress={() => this._addItem()}
        />
      </View>
    );
  }

  _listenForItems(itemsRef) {
    itemsRef.on('value', snap => {
      const items = [];
      snap.forEach(record => {
        items.push({
          title: record.val().title,
          _key: record.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    })
  }

  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Add new item',
      null,
      [
        {
          text: 'Add',
          onPress: text => {
            this.itemsRef.push({title: text})
          }
        }
      ],
      'plain-text'
    );
  }

}

export default GroceryApp;
