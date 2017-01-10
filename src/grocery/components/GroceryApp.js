import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import StatusBar from './StatusBar';
import ListItem from './ListItem';
import ActionButton from './ActionButton';

import styles from '../styles';

class GroceryApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(
        [
          { title: 'Pizza' },
          { title: 'Pasta' },
          { title: 'Tiramisù' },
        ]
      )
    });
  }

  _renderListItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderListItem.bind(this)}
        />
        <ActionButton
          title="Add"
          onPress={() => {
            alert('Add');
          }}
        />
      </View>
    );
  }
}

export default GroceryApp;
