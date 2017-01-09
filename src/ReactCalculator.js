import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputButtonSet from './InputButtonSet';
import Styles from './Styles';

const rows = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 0
    }
  }

  _onButtonClick(input) {
    switch (typeof input) {
      case 'number':
        this._handleNumberInput(input);
        break;
      default:
        // just skip
    }
  }

  _handleNumberInput(number) {
    const inputValue = (this.state.inputValue * 10) + number;
    this.setState({ inputValue });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.display}>
          <Text style={Styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <InputButtonSet
          rows={rows}
          onButtonClick={this._onButtonClick.bind(this)} />
      </View>
    );
  }
};

export default ReactCalculator;
