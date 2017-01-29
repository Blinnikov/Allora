import React, { Component } from 'react';
import { ActivityIndicator, AlertIOS, ListView, View } from 'react-native';
import I18n from 'react-native-i18n';
import ListItem from './ListItem';
import DynamicListItem from './DynamicListItem';
import WordEdit from './WordEdit'
import * as database from '../../../firebase/database';

import CommonStyles from '../../../styles/Common';
import PageStyles from './WordList.Styles';

class WordList extends Component {
  constructor(props) {
    super(props);

    this._data = null;
    this.itemsRef = database.getItemsRef();

    this.state = {
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount() {
    this._listenForItems(this.itemsRef);
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator
        size='large'
        style={CommonStyles.pageContainer}
      />;
    }

    return (
      <View style={CommonStyles.pageContainer}>
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
        items.unshift({
          key: record.key,
          word,
          translation,
          lang,
          shouldRemove: false
        });
      });

      this._data = items;
      this.setState({
        loading: false,
        dataSource: this.state.dataSource.cloneWithRows(this._data)
      });
    });
  }

  _onRemoveButtonPress = ({key, word}) => {
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
  }

  _onEditButtonPress = (item) => {
    const { navigator, emitter } = this.props;
    const { word, translation, lang } = item;
    const Component =
      <WordEdit
        item={item}
        navigator={navigator}
        emitter={emitter}
      />
    navigator.push({
      readyComponent: true,
      component: Component,
      title: I18n.t('words.form.editTitle')
    })
  }

  _renderItem(item) {
    return (
      <DynamicListItem
        shouldRemove={item.shouldRemove}
        onDidRemove={() => this._onDidRemove(item)}
      >
        <ListItem item={item}
          onRemovePress={() => this._onRemoveButtonPress(item)}
          onEditPress={() => this._onEditButtonPress(item)}
        />
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
