import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, AlertIOS, ListView, View } from 'react-native';
import I18n from 'react-native-i18n';
import ListItem from './components/ListItem';
import DynamicListItem from './components/DynamicListItem';
import WordsAddButton from '../../navigation/WordsAddButton';
import db from '../../firebase/database';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

class WordList extends Component {
  static navigationOptions = {
    header: (navigation) => {
      return {
        right: (
            <WordsAddButton navigation={navigation} />
        ),
      };
    },
  };

  constructor(props) {
    super(props);

    this._data = null;

    this.state = {
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    db.words.subscribe(items => this._setDataSource(items));
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

  _setDataSource(items) {
    this._data = items;
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(this._data)
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
    db.words.remove(item.key);
  }

}

WordList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WordList;
