import React, { Component } from 'react';
import { View, Text, ListView, AlertIOS } from 'react-native';
import I18n from 'react-native-i18n';
import ListItem from './ListItem';
import DynamicListItem from './DynamicListItem';
import * as database from '../../firebase/database';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

class WordList extends Component {
  constructor(props) {
    super(props);

    this._data = null;
    this.itemsRef = database.getItemsRef();

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
      <View style={CommonStyles.navigationContainer}>
        <ListView
          style={PageStyles.listView}
          automaticallyAdjustContentInsets={false}
          removeClippedSubviews={false}
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
        const { word, translation, lang } = record.val();
        items.push({
          key: record.key,
          word,
          translation,
          lang,
          shouldRemove: false
        });
      });

      this._data = items;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._data)
      });
    })
  }

  _onSwipeLeft = ({key, word}) => {
    AlertIOS.prompt(
      I18n.t('words.list.removeMessage', { word }),
      null,
      [
        {
          text: I18n.t('common.remove'),
          onPress: () => this._removeItem(key),
          style: 'destructive'
        },
        {
          text: I18n.t('common.cancel'),
          onPress: () => {},
          style: 'cancel'
        }
      ],
      'default'
    )
  };

  _renderItem(item) {
    return (
      <DynamicListItem
        shouldRemove={item.shouldRemove}
        onDidRemove={() => this._onDidRemove(item)}
      >
        <ListItem item={item} onSwipeLeft={() => this._onSwipeLeft(item)} />
      </DynamicListItem>
    )
  }

  _removeItem(key) {
    this._data = this._data.map(item => {
      return {
        ...item,
        shouldRemove: item.key === key
      }
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    });
  }

  _onDidRemove(item) {
    this.itemsRef.child(item.key).remove();
  }

}

export default WordList;
