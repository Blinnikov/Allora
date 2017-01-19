import React, { Component } from 'react';
import { View, Text, ListView, AlertIOS } from 'react-native';
import ListItem from './ListItem';
import DynamicListItem from './DynamicListItem';
import * as database from '../../firebase/database';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

class WordList extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = database.getItemsRef();

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
      <View style={CommonStyles.navigationContainer}>
        <ListView
          style={PageStyles.listView}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
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

}

export default WordList;
