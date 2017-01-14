import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor={'#E8E8E8'}
          onPress={this.props.onPress}
          style={this.props.buttonStyles}
        >
          <View style={defaultButtonStyles.buttonContainer}>
            <Text style={this.props.buttonTextStyles}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const defaultButtonStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default Button;
