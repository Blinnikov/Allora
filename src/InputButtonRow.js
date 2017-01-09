import React from 'react';
import { View } from 'react-native';
import InputButton from './InputButton';
import Styles from './Styles';

const _onInputButtonPressed = (input) => {
  alert(input);
}

const InputButtonRow = ({buttons}) => (
  <View style={Styles.inputRow}>
    {buttons.map((button, index) =>
      <InputButton
        key={index}
        value={button}
        onPress={() => _onInputButtonPressed(button)} />
    )}
  </View>
);

export default InputButtonRow;
