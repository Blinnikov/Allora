import React, { Component } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { storage } from 'allora-core';
import ListItem from './components/ListItem';
import WordsAddButton from '../../navigation/WordsAddButton';

import CommonStyles from '../../styles/Common';

class WordFlatList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <WordsAddButton navigation={navigation} />,
    };
  };

  constructor(props) {
    super(props);

    this._data = null;

    this.state = {
      loading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    storage.words.subscribe(this._setDataSource.bind(this));
  }

  _setDataSource(items) {
    this._data = items;
    this.setState({
      loading: false,
      dataSource: this._data,
    });
  }

  _renderItem({ item }) {
    return (
      <ListItem
        item={item}
        onRemovePress={() => this._onRemoveButtonPress(item)}
        onEditPress={() => this._onEditButtonPress(item)}
      />
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator size="large" style={CommonStyles.pageContainer} />
      );
    }

    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={this._renderItem}
      />
    );
  }
}

export default WordFlatList;
