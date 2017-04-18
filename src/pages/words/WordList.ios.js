import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AlertIOS, ActivityIndicator, FlatList, View } from 'react-native';
import I18n from 'react-native-i18n';
import { storage } from 'allora-core';
import DynamicListItem from './components/DynamicListItem';
import ListItem from './components/ListItem';
import WordsAddButton from '../../navigation/WordsAddButton';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

class WordList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <WordsAddButton navigation={navigation} />,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount() {
    storage.words.subscribe(items => this._setDataSource(items));
  }

  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator size="large" style={CommonStyles.pageContainer} />
      );
    }

    return (
      <View style={CommonStyles.pageContainer}>
        <FlatList
          style={PageStyles.listView}
          data={this.state.data}
          renderItem={this._renderItem.bind(this)}
        />
      </View>
    );
  }

  _setDataSource(items) {
    this.setState({
      loading: false,
      data: items,
    });
  }

  _onRemoveButtonPress({ key, word }) {
    AlertIOS.prompt(
      I18n.t('words.list.removeMessage', { word }),
      null,
      [
        {
          text: I18n.t('common.remove'),
          onPress: () => this._removeItem(key),
          style: 'destructive',
        },
        {
          text: I18n.t('common.cancel'),
          onPress: () => {},
          style: 'cancel',
        },
      ],
      'default',
    );
  }

  _onEditButtonPress(item) {
    const { navigation } = this.props;
    navigation.navigate('WordEdit', { item });
  }

  _renderItem({ item }) {
    return (
      <DynamicListItem
        shouldRemove={item.shouldRemove}
        onDidRemove={() => this._onDidRemove(item)}
      >
        <ListItem
          item={item}
          onRemovePress={() => this._onRemoveButtonPress(item)}
          onEditPress={() => this._onEditButtonPress(item)}
        />
    </DynamicListItem>
    );
  }

  _removeItem(key) {
    const data = this.state.data.map(item => {
      return {
        ...item,
        shouldRemove: item.key === key,
      };
    });
    this.setState({
      data
    });
  }

  _onDidRemove(item) {
    storage.words.remove(item.key);
  }
}

WordList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WordList;
