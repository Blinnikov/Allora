import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, AlertIOS, ListView, TouchableOpacity, View } from 'react-native';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './components/ListItem';
import DynamicListItem from './components/DynamicListItem';
import WordEdit from './WordEdit';
import * as database from '../../firebase/database';

import NavBarStyles from '../../styles/NavigationBar';
import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

class WordList extends Component {
  static navigationOptions = {
    header: (navigation) => {
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      return {
        right: (

            <TouchableOpacity
              onPress={() => navigation.navigate('WordAdd')}
              >
              <Icon name='md-add' style={[
                  NavBarStyles.navBarRightButtonIcon
                ]}/>
            </TouchableOpacity>

        ),
      };
    },
  };

  constructor(props) {
    super(props);

    this._data = null;
    this.itemsRef = database.getItemsRef();

    this.state = {
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
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

  _onRemoveButtonPress({key, word}) {
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
    );
  }

  _onEditButtonPress(item) {
    const { navigation } = this.props;
    navigation.navigate('WordEdit', { item });
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
    );
  }

  _removeItem(key) {
    this._data = this._data.map(item => {
      return {
        ...item,
        shouldRemove: item.key === key
      };
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    });
  }

  _onDidRemove(item) {
    this.itemsRef.child(item.key).remove();
  }

}

export default WordList;
