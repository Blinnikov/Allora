import React, { Component } from 'react';
import { Text, View } from 'react-native';
import WordsAddButton from '../../navigation/WordsAddButton';

class WordFlatList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <WordsAddButton navigation={navigation} />,
    };
  };

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}

export default WordFlatList;
