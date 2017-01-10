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
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  _onButtonClick(input) {
    switch (typeof input) {
      case 'number':
        this._handleNumberInput(input);
        break
      case 'string':
        this._handleStringInput(input);
        break;
      default:
        // just skip
    }
  }

  _handleNumberInput(num) {
    const inputValue = (this.state.inputValue * 10) + num;
    this.setState({ inputValue });
  }

  _handleStringInput(str) {
    if (['/', '*', '+', '-'].includes(str)) {
      this.setState({
        selectedSymbol: str,
        previousInputValue: this.state.inputValue,
        inputValue: 0
      });
      return;
    }

    if (str === '=') {
      const { selectedSymbol, inputValue, previousInputValue } = this.state;
      if (!selectedSymbol) {
        return;
      }

      const newInputValue = eval(`${previousInputValue}${selectedSymbol}${inputValue}`);
      this.setState({
        previousInputValue: 0,
        inputValue: newInputValue,
        selectedSymbol: null
      });
      return;
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.display}>
          <Text style={Styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <InputButtonSet
          rows={rows}
          selectedSymbol={this.state.selectedSymbol}
          onButtonClick={this._onButtonClick.bind(this)} />
      </View>
    );
  }
};

export default ReactCalculator;
