import React, { Component } from 'react';
import { View, Text, ListView, AlertIOS } from 'react-native';
import StatusBar from './StatusBar';
import ListItem from './ListItem';
import DynamicListItem from './DynamicListItem';
import Button from 'apsl-react-native-button';
import * as firebase from 'firebase';

import AppStyles from '../../Styles';
import styles from '../styles';

class GroceryApp extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = firebase.database().ref('/items');

    this.state = {
      itemToRemove: null,
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
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
        />
        <Button
          onPress={() => this._addItem()}
          style={[AppStyles.buttonSuccess, styles.addButton]}
          textStyle={AppStyles.buttonPrimaryText}
        >
          Add
        </Button>
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
        itemToRemove: null,
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    })
  }

  _renderItem(item) {
    const onSwipeLeft = () => {
      AlertIOS.prompt(
        'Complete',
        null,
        [
          {
            text: 'Complete',
            onPress: () => this._removeItem(item),
            style: 'destructive'
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancelled'),
            style: 'cancel'
          }
        ],
        'default'
      )
    };

    return (
      <DynamicListItem
        shouldRemove={item._key === this.state.itemToRemove}
        itemToRemove={item._key === this.state.itemToRemove && item}
        onDidRemove={() => this._onDidRemove(item)}
      >
        <ListItem item={item} onSwipeLeft={onSwipeLeft} />
      </DynamicListItem>
    )
  }

  _removeItem(item) {
    this.setState({
      itemToRemove: item._key
    });
  }

  _onDidRemove(item) {
    this.itemsRef.child(item._key).remove();
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
