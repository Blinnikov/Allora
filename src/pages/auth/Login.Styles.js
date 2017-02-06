import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const style = StyleSheet.create({
  loginPageContainer: {
    paddingHorizontal: 16
  },
  label: {
    color: colors.$loginLabelColor
  },
  input: {
    color: colors.$black
  }
});

export default style;
